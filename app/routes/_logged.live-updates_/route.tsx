import {
  Typography,
  Card,
  Select,
  Space,
  Button,
  Row,
  Col,
  Tag,
  Spin,
} from 'antd'
import { useState } from 'react'
const { Title, Text, Paragraph } = Typography
import { useUserContext } from '@/core/context'
import dayjs from 'dayjs'
import { useLocation, useNavigate, useParams } from '@remix-run/react'
import { useUploadPublic } from '@/plugins/upload/client'
import { Api } from '@/core/trpc'
import { PageLayout } from '@/designSystem'

export default function LiveUpdatesPage() {
  const navigate = useNavigate()
  const [selectedType, setSelectedType] = useState<string>('')
  const [selectedRoute, setSelectedRoute] = useState<string>('')

  // Fetch all routes for filtering
  const { data: routes } = Api.route.findMany.useQuery({})

  // Fetch all delays with related data
  const {
    data: delays,
    isLoading,
    refetch,
  } = Api.delay.findMany.useQuery({
    include: {
      route: true,
      user: true,
      delayVerifications: true,
    },
  })

  // Mutation for verifying delays
  const { mutateAsync: verifyDelay } =
    Api.delayVerification.create.useMutation()

  const handleVerify = async (delayId: string, isVerified: boolean) => {
    await verifyDelay({
      data: {
        isVerified,
        delayId,
        userId: 'current-user-id', // In real implementation, get from useUserContext
      },
    })
    refetch()
  }

  const filteredDelays = delays?.filter(delay => {
    if (selectedType && selectedRoute) {
      return (
        delay.route.type === selectedType && delay.route.id === selectedRoute
      )
    }
    if (selectedType) return delay.route.type === selectedType
    if (selectedRoute) return delay.route.id === selectedRoute
    return true
  })

  const uniqueTypes = [...new Set(routes?.map(route => route.type))]

  return (
    <PageLayout layout="narrow">
      <Space direction="vertical" style={{ width: '100%' }} size="large">
        <div style={{ textAlign: 'center' }}>
          <Title level={2}>
            <i className="las la-clock"></i> Live Transport Updates
          </Title>
          <Paragraph>
            View current delays and disruptions in your area. Help others by
            verifying reported delays.
          </Paragraph>
        </div>

        <Card>
          <Space direction="vertical" style={{ width: '100%' }} size="middle">
            <Row gutter={16}>
              <Col xs={24} sm={8}>
                <Select
                  style={{ width: '100%' }}
                  placeholder="Filter by transport type"
                  allowClear
                  value={selectedType}
                  onChange={setSelectedType}
                >
                  {uniqueTypes?.map(type => (
                    <Select.Option key={type} value={type}>
                      {type}
                    </Select.Option>
                  ))}
                </Select>
              </Col>
              <Col xs={24} sm={8}>
                <Select
                  style={{ width: '100%' }}
                  placeholder="Filter by route"
                  allowClear
                  value={selectedRoute}
                  onChange={setSelectedRoute}
                >
                  {routes?.map(route => (
                    <Select.Option key={route.id} value={route.id}>
                      {route.name}
                    </Select.Option>
                  ))}
                </Select>
              </Col>
              <Col xs={24} sm={8}>
                <Button
                  type="primary"
                  icon={<i className="las la-plus"></i>}
                  onClick={() => navigate('/report-delay')}
                  block
                >
                  Report New Delay
                </Button>
              </Col>
            </Row>
          </Space>
        </Card>

        {isLoading ? (
          <div style={{ textAlign: 'center', padding: '2rem' }}>
            <Spin size="large" />
          </div>
        ) : (
          <Space direction="vertical" style={{ width: '100%' }} size="middle">
            {filteredDelays?.map(delay => (
              <Card key={delay.id}>
                <Row gutter={16}>
                  <Col xs={24} md={16}>
                    <Space direction="vertical">
                      <Title level={4}>
                        <i className="las la-route"></i> {delay.route.name}
                      </Title>
                      <Text>
                        <i className="las la-clock"></i> Delay:{' '}
                        {delay.delayMinutes.toString()} minutes
                      </Text>
                      <Text type="secondary">
                        <i className="las la-calendar"></i> Reported:{' '}
                        {dayjs(delay.createdAt).format('MMM D, YYYY HH:mm')}
                      </Text>
                      {delay.description && (
                        <Paragraph>
                          <i className="las la-info-circle"></i>{' '}
                          {delay.description}
                        </Paragraph>
                      )}
                      <Tag color={delay.status === 'ACTIVE' ? 'red' : 'green'}>
                        {delay.status}
                      </Tag>
                    </Space>
                  </Col>
                  <Col xs={24} md={8}>
                    <Space direction="vertical" style={{ width: '100%' }}>
                      <Text>Verify this delay:</Text>
                      <Space>
                        <Button
                          onClick={() => handleVerify(delay.id, true)}
                          icon={<i className="las la-check"></i>}
                        >
                          Confirm
                        </Button>
                        <Button
                          danger
                          onClick={() => handleVerify(delay.id, false)}
                          icon={<i className="las la-times"></i>}
                        >
                          Dispute
                        </Button>
                      </Space>
                      <Text type="secondary">
                        Verifications: {delay.delayVerifications.length}
                      </Text>
                    </Space>
                  </Col>
                </Row>
              </Card>
            ))}
          </Space>
        )}
      </Space>
    </PageLayout>
  )
}
