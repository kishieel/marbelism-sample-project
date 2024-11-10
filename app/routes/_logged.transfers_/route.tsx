import {
  Typography,
  Form,
  Input,
  Button,
  Card,
  List,
  Space,
  message,
  Select,
} from 'antd'
import { useState } from 'react'
import type { Route, SavedRoute } from '@prisma/client'
const { Title, Text } = Typography
import { useUserContext } from '@/core/context'
import dayjs from 'dayjs'
import { useLocation, useNavigate, useParams } from '@remix-run/react'
import { useUploadPublic } from '@/plugins/upload/client'
import { Api } from '@/core/trpc'
import { PageLayout } from '@/designSystem'

export default function TransferPlanningPage() {
  const { user } = useUserContext()
  const navigate = useNavigate()
  const [startLocation, setStartLocation] = useState('')
  const [endLocation, setEndLocation] = useState('')

  // Fetch available routes with delays included
  const { data: routes } = Api.route.findMany.useQuery({
    include: {
      delays: true,
      stops: true,
    },
  })

  // Fetch user's saved routes
  const { data: savedRoutes } = Api.savedRoute.findMany.useQuery({
    where: { userId: user?.id },
    include: { route: true },
  })

  // Save route mutation
  const { mutateAsync: saveRoute } = Api.savedRoute.create.useMutation()

  // Filter routes based on search
  const filteredRoutes = routes?.filter(
    route =>
      route.startLocation.toLowerCase().includes(startLocation.toLowerCase()) &&
      route.endLocation.toLowerCase().includes(endLocation.toLowerCase()),
  )

  // Calculate total duration including delays
  const getEstimatedArrival = (route: Route & { delays: any[] }) => {
    const totalDelay = route.delays.reduce(
      (acc, delay) => acc + delay.delayMinutes,
      0,
    )
    return route.estimatedDuration + totalDelay
  }

  const handleSaveRoute = async (route: Route) => {
    try {
      await saveRoute({
        data: {
          name: `${route.startLocation} to ${route.endLocation}`,
          userId: user?.id as string,
          routeId: route.id,
          frequency: 'DAILY',
        },
      })
      message.success('Route saved successfully!')
    } catch (error) {
      message.error('Failed to save route')
    }
  }

  return (
    <PageLayout layout="narrow">
      <Space direction="vertical" size="large" style={{ width: '100%' }}>
        <div style={{ textAlign: 'center' }}>
          <Title level={2}>
            <i className="las la-route"></i> Transfer Planning
          </Title>
          <Text>
            Plan your journey and find the best routes with real-time delay
            information
          </Text>
        </div>

        <Card>
          <Form layout="vertical">
            <Space style={{ width: '100%' }} direction="horizontal">
              <Form.Item label="From" style={{ flex: 1 }}>
                <Input
                  prefix={<i className="las la-map-marker"></i>}
                  placeholder="Enter start location"
                  value={startLocation}
                  onChange={e => setStartLocation(e.target.value)}
                />
              </Form.Item>
              <Form.Item label="To" style={{ flex: 1 }}>
                <Input
                  prefix={<i className="las la-map-marker-alt"></i>}
                  placeholder="Enter destination"
                  value={endLocation}
                  onChange={e => setEndLocation(e.target.value)}
                />
              </Form.Item>
            </Space>
          </Form>
        </Card>

        <Card
          title={
            <>
              <i className="las la-clock"></i> Available Routes
            </>
          }
        >
          <List
            dataSource={filteredRoutes}
            renderItem={route => (
              <List.Item
                actions={[
                  <Button
                    key="view"
                    type="link"
                    onClick={() => navigate(`/routes/${route.id}`)}
                  >
                    <i className="las la-eye"></i> View
                  </Button>,
                  <Button
                    key="save"
                    type="link"
                    onClick={() => handleSaveRoute(route)}
                  >
                    <i className="las la-bookmark"></i> Save
                  </Button>,
                ]}
              >
                <List.Item.Meta
                  title={`${route.startLocation} → ${route.endLocation}`}
                  description={
                    <Space direction="vertical">
                      <Text>
                        <i className="las la-bus"></i> Type: {route.type}
                      </Text>
                      <Text>
                        <i className="las la-clock"></i> Estimated Duration:{' '}
                        {getEstimatedArrival(route).toString()} minutes
                        {route.delays.length > 0 && (
                          <Text type="danger"> (Including delays)</Text>
                        )}
                      </Text>
                    </Space>
                  }
                />
              </List.Item>
            )}
          />
        </Card>

        {savedRoutes && savedRoutes.length > 0 && (
          <Card
            title={
              <>
                <i className="las la-star"></i> Saved Routes
              </>
            }
          >
            <List
              dataSource={savedRoutes}
              renderItem={(savedRoute: SavedRoute & { route: Route }) => (
                <List.Item>
                  <List.Item.Meta
                    title={savedRoute.name}
                    description={
                      <Text>
                        <i className="las la-repeat"></i> Frequency:{' '}
                        {savedRoute.frequency}
                      </Text>
                    }
                  />
                </List.Item>
              )}
            />
          </Card>
        )}
      </Space>
    </PageLayout>
  )
}
