import {
  Typography,
  Card,
  List,
  Tag,
  Button,
  Space,
  notification,
  Empty,
} from 'antd'
const { Title, Text } = Typography
import { useUserContext } from '@/core/context'
import dayjs from 'dayjs'
import { useLocation, useNavigate, useParams } from '@remix-run/react'
import { useUploadPublic } from '@/plugins/upload/client'
import { Api } from '@/core/trpc'
import { PageLayout } from '@/designSystem'

export default function MyJourneysPage() {
  const { user } = useUserContext()
  const navigate = useNavigate()

  // Fetch saved routes
  const { data: savedRoutes } = Api.savedRoute.findMany.useQuery({
    where: { userId: user?.id },
    include: { route: true },
  })

  // Fetch active journeys
  const { data: activeJourneys } = Api.journey.findMany.useQuery({
    where: { userId: user?.id, status: 'ACTIVE' },
    include: { journeyRoutes: { include: { route: true } } },
  })

  // Fetch subscriptions
  const { data: subscriptions } = Api.subscription.findMany.useQuery({
    where: { userId: user?.id },
    include: { route: true },
  })

  // Fetch delays affecting subscribed routes
  const { data: delays } = Api.delay.findMany.useQuery({
    where: {
      routeId: { in: subscriptions?.map(sub => sub.routeId) },
      status: 'ACTIVE',
    },
    include: { route: true },
  })

  // Handle subscription deletion
  const { mutateAsync: deleteSubscription } =
    Api.subscription.delete.useMutation()

  const handleUnsubscribe = async (subscriptionId: string) => {
    try {
      await deleteSubscription({ where: { id: subscriptionId } })
      notification.success({ message: 'Successfully unsubscribed from route' })
    } catch (error) {
      notification.error({ message: 'Failed to unsubscribe from route' })
    }
  }

  return (
    <PageLayout layout="narrow">
      <Space direction="vertical" size="large" style={{ width: '100%' }}>
        <div>
          <Title level={2}>
            <i className="las la-route"></i> My Journeys
          </Title>
          <Text>
            Manage your routes, track active journeys, and stay updated with
            delays
          </Text>
        </div>

        {/* Active Journeys Section */}
        <Card
          title={
            <>
              <i className="las la-walking"></i> Active Journeys
            </>
          }
        >
          {activeJourneys?.length ? (
            <List
              dataSource={activeJourneys}
              renderItem={journey => (
                <List.Item>
                  <Card type="inner" style={{ width: '100%' }}>
                    <Space direction="vertical">
                      <Text strong>From: {journey.startLocation}</Text>
                      <Text strong>To: {journey.endLocation}</Text>
                      <Text type="secondary">
                        Started:{' '}
                        {dayjs(journey.createdAt).format('MMM D, YYYY HH:mm')}
                      </Text>
                      {journey.journeyRoutes?.map(jr => (
                        <Tag key={jr.id} color="blue">
                          {jr.route?.name}
                        </Tag>
                      ))}
                    </Space>
                  </Card>
                </List.Item>
              )}
            />
          ) : (
            <Empty description="No active journeys" />
          )}
        </Card>

        {/* Saved Routes Section */}
        <Card
          title={
            <>
              <i className="las la-star"></i> Saved Routes
            </>
          }
        >
          {savedRoutes?.length ? (
            <List
              dataSource={savedRoutes}
              renderItem={saved => (
                <List.Item>
                  <Card type="inner" style={{ width: '100%' }}>
                    <Space direction="vertical">
                      <Text strong>{saved.name}</Text>
                      <Text>
                        {saved.route?.startLocation} →{' '}
                        {saved.route?.endLocation}
                      </Text>
                      {saved.frequency && (
                        <Tag color="green">{saved.frequency}</Tag>
                      )}
                      <Button
                        type="link"
                        onClick={() => navigate(`/routes/${saved.routeId}`)}
                      >
                        View Details
                      </Button>
                    </Space>
                  </Card>
                </List.Item>
              )}
            />
          ) : (
            <Empty description="No saved routes" />
          )}
        </Card>

        {/* Delays Section */}
        <Card
          title={
            <>
              <i className="las la-exclamation-triangle"></i> Current Delays
            </>
          }
        >
          {delays?.length ? (
            <List
              dataSource={delays}
              renderItem={delay => (
                <List.Item>
                  <Card
                    type="inner"
                    style={{ width: '100%' }}
                    className="alert-card"
                  >
                    <Space direction="vertical">
                      <Text strong>Route: {delay.route?.name}</Text>
                      <Text type="danger">
                        Delay: {delay.delayMinutes.toString()} minutes
                      </Text>
                      {delay.description && <Text>{delay.description}</Text>}
                      <Text type="secondary">
                        Reported:{' '}
                        {dayjs(delay.createdAt).format('MMM D, YYYY HH:mm')}
                      </Text>
                    </Space>
                  </Card>
                </List.Item>
              )}
            />
          ) : (
            <Empty description="No current delays" />
          )}
        </Card>

        {/* Subscriptions Section */}
        <Card
          title={
            <>
              <i className="las la-bell"></i> Route Subscriptions
            </>
          }
        >
          {subscriptions?.length ? (
            <List
              dataSource={subscriptions}
              renderItem={subscription => (
                <List.Item>
                  <Card type="inner" style={{ width: '100%' }}>
                    <Space direction="vertical">
                      <Text strong>{subscription.route?.name}</Text>
                      <Text type="secondary">
                        Notification type: {subscription.notificationType}
                      </Text>
                      <Button
                        danger
                        onClick={() => handleUnsubscribe(subscription.id)}
                      >
                        Unsubscribe
                      </Button>
                    </Space>
                  </Card>
                </List.Item>
              )}
            />
          ) : (
            <Empty description="No route subscriptions" />
          )}
        </Card>
      </Space>
    </PageLayout>
  )
}
