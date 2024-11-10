import { Typography, Card, Row, Col, Button, List, Spin } from 'antd'
const { Title, Text } = Typography
import relativeTime from 'dayjs/plugin/relativeTime'
dayjs.extend(relativeTime)
import { useUserContext } from '@/core/context'
import dayjs from 'dayjs'
import { useLocation, useNavigate, useParams } from '@remix-run/react'
import { useUploadPublic } from '@/plugins/upload/client'
import { Api } from '@/core/trpc'
import { PageLayout } from '@/designSystem'

export default function HomePage() {
  const navigate = useNavigate()
  const { user } = useUserContext()

  const { data: routes, isLoading: loadingRoutes } =
    Api.route.findMany.useQuery({
      include: {
        stops: true,
        delays: {
          include: {
            user: true,
            delayVerifications: true,
          },
        },
      },
    })

  const { data: nearbyRoutes, isLoading: loadingNearby } =
    Api.route.findMany.useQuery({
      where: {
        stops: {
          some: {
            latitude: { contains: user?.id ? '48' : '0' },
            longitude: { contains: user?.id ? '2' : '0' },
          },
        },
      },
      include: {
        stops: true,
        delays: true,
      },
    })

  return (
    <PageLayout layout="narrow">
      <div style={{ padding: '24px' }}>
        <Title level={2}>
          <i className="las la-map-marked-alt" /> Public Transport Live Map
        </Title>
        <Text type="secondary">
          View real-time transport routes, delays, and plan your journey
          efficiently.
        </Text>

        <Row gutter={[16, 16]} style={{ marginTop: '24px' }}>
          <Col xs={24} md={8}>
            <Card
              title={
                <>
                  <i className="las la-bolt" /> Quick Actions
                </>
              }
            >
              <Button
                type="primary"
                block
                icon={<i className="las la-exclamation-circle" />}
                onClick={() => navigate('/report-delay')}
                style={{ marginBottom: '12px' }}
              >
                Report Delay
              </Button>
              <Button
                block
                icon={<i className="las la-exchange-alt" />}
                onClick={() => navigate('/transfers')}
              >
                Plan Transfer
              </Button>
            </Card>
          </Col>

          <Col xs={24} md={16}>
            <Card
              title={
                <>
                  <i className="las la-location-arrow" /> Nearby Transport
                </>
              }
            >
              {loadingNearby ? (
                <div style={{ textAlign: 'center', padding: '20px' }}>
                  <Spin />
                </div>
              ) : (
                <List
                  dataSource={nearbyRoutes}
                  renderItem={route => (
                    <List.Item
                      actions={[
                        <Button
                          type="link"
                          onClick={() => navigate(`/routes/${route.id}`)}
                        >
                          Details
                        </Button>,
                      ]}
                    >
                      <List.Item.Meta
                        title={route.name}
                        description={`${route.startLocation} → ${route.endLocation}`}
                      />
                      <Text type={route.delays?.length ? 'danger' : 'success'}>
                        {route.delays?.length ? (
                          <>
                            <i className="las la-clock" /> Delayed
                          </>
                        ) : (
                          <>
                            <i className="las la-check-circle" /> On Time
                          </>
                        )}
                      </Text>
                    </List.Item>
                  )}
                />
              )}
            </Card>
          </Col>

          <Col span={24}>
            <Card
              title={
                <>
                  <i className="las la-route" /> Active Routes
                </>
              }
            >
              {loadingRoutes ? (
                <div style={{ textAlign: 'center', padding: '20px' }}>
                  <Spin />
                </div>
              ) : (
                <List
                  dataSource={routes}
                  renderItem={route => (
                    <List.Item>
                      <List.Item.Meta
                        title={
                          <Row justify="space-between">
                            <Col>
                              <Text strong>{route.name}</Text>
                            </Col>
                            <Col>
                              <Text type="secondary">
                                Duration: {route.estimatedDuration.toString()}{' '}
                                min
                              </Text>
                            </Col>
                          </Row>
                        }
                        description={
                          <>
                            <Text>
                              {route.startLocation} → {route.endLocation}
                            </Text>
                            {route.delays?.length > 0 && (
                              <div style={{ marginTop: '8px' }}>
                                <Text type="danger">
                                  <i className="las la-exclamation-triangle" />{' '}
                                  Latest delay:{' '}
                                  {route.delays[0].delayMinutes.toString()}{' '}
                                  minutes (
                                  {dayjs(route.delays[0].createdAt).fromNow()})
                                </Text>
                              </div>
                            )}
                          </>
                        }
                      />
                    </List.Item>
                  )}
                />
              )}
            </Card>
          </Col>
        </Row>
      </div>
    </PageLayout>
  )
}
