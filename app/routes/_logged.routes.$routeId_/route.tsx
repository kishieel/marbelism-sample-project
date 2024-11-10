import {
  Typography,
  Card,
  Button,
  Statistic,
  List,
  notification,
  Row,
  Col,
  Timeline,
} from 'antd'
const { Title, Text, Paragraph } = Typography
import { useUserContext } from '@/core/context'
import dayjs from 'dayjs'
import { useLocation, useNavigate, useParams } from '@remix-run/react'
import { useUploadPublic } from '@/plugins/upload/client'
import { Api } from '@/core/trpc'
import { PageLayout } from '@/designSystem'

export default function RouteDetailsPage() {
  const { routeId } = useParams()
  const navigate = useNavigate()
  const { user } = useUserContext()

  // Fetch route details with related delays
  const { data: route } = Api.route.findFirst.useQuery({
    where: { id: routeId },
    include: {
      stops: true,
      delays: {
        include: {
          delayVerifications: true,
        },
      },
    },
  })

  // Fetch user's subscription status
  const { data: subscription } = Api.subscription.findFirst.useQuery({
    where: {
      userId: user?.id,
      routeId: routeId,
    },
  })

  // Subscribe to route notifications
  const { mutateAsync: subscribe } = Api.subscription.create.useMutation()
  const { mutateAsync: unsubscribe } = Api.subscription.delete.useMutation()

  const handleSubscriptionToggle = async () => {
    if (!user?.id || !routeId) {
      notification.error({ message: 'Unable to update subscription' })
      return
    }

    try {
      if (subscription) {
        await unsubscribe({ where: { id: subscription.id } })
        notification.success({
          message: 'Unsubscribed from route notifications',
        })
      } else {
        await subscribe({
          data: {
            notificationType: 'ROUTE_DELAYS',
            userId: user.id,
            routeId: routeId,
          },
        })
        notification.success({ message: 'Subscribed to route notifications' })
      }
    } catch (error) {
      notification.error({ message: 'Failed to update subscription' })
    }
  }

  if (!route) return null

  // Calculate average delay
  const averageDelay =
    route.delays.length > 0
      ? route.delays.reduce((acc, delay) => acc + delay.delayMinutes, 0) /
        route.delays.length
      : 0

  return (
    <PageLayout layout="narrow">
      <div style={{ padding: '24px' }}>
        <Title level={2}>
          <i className="las la-route" style={{ marginRight: '8px' }}></i>
          Route Details
        </Title>
        <Paragraph>
          View detailed information about this route and its delays
        </Paragraph>

        <Card style={{ marginBottom: '24px' }}>
          <Row gutter={[24, 24]}>
            <Col xs={24} sm={12}>
              <Title level={4}>{route.name}</Title>
              <Text>Type: {route.type}</Text>
              <Paragraph>
                <i className="las la-map-marker-alt"></i> From:{' '}
                {route.startLocation}
                <br />
                <i className="las la-map-marker"></i> To: {route.endLocation}
              </Paragraph>
            </Col>
            <Col xs={24} sm={12}>
              <Statistic
                title="Estimated Duration"
                value={route.estimatedDuration}
                suffix="minutes"
              />
              <Statistic
                title="Average Delay"
                value={averageDelay.toFixed(1)}
                suffix="minutes"
                style={{ marginTop: '16px' }}
              />
              {user && (
                <Button
                  type={subscription ? 'default' : 'primary'}
                  onClick={handleSubscriptionToggle}
                  style={{ marginTop: '16px' }}
                >
                  <i
                    className={`las ${
                      subscription ? 'la-bell-slash' : 'la-bell'
                    }`}
                  ></i>
                  {subscription ? 'Unsubscribe' : 'Subscribe to Updates'}
                </Button>
              )}
            </Col>
          </Row>
        </Card>

        <Title level={3}>
          <i className="las la-clock"></i> Recent Delays
        </Title>
        <List
          dataSource={route.delays.sort(
            (a, b) =>
              dayjs(b.createdAt).valueOf() - dayjs(a.createdAt).valueOf(),
          )}
          renderItem={delay => (
            <List.Item>
              <Card style={{ width: '100%' }}>
                <Row gutter={[16, 16]}>
                  <Col xs={24} sm={18}>
                    <Text strong>
                      {delay.delayMinutes.toString()} minutes delay
                    </Text>
                    <br />
                    <Text type="secondary">
                      Reported{' '}
                      {dayjs(delay.createdAt).format('MMM D, YYYY HH:mm')}
                    </Text>
                    {delay.description && (
                      <Paragraph>{delay.description}</Paragraph>
                    )}
                  </Col>
                  <Col xs={24} sm={6}>
                    <Text type="secondary">
                      Verified by {delay.delayVerifications.length} users
                    </Text>
                  </Col>
                </Row>
              </Card>
            </List.Item>
          )}
        />

        <Title level={3} style={{ marginTop: '24px' }}>
          <i className="las la-map"></i> Stops
        </Title>
        <Timeline>
          {route.stops?.map(stop => (
            <Timeline.Item key={stop.id}>
              <Text strong>{stop.name}</Text>
            </Timeline.Item>
          ))}
        </Timeline>
      </div>
    </PageLayout>
  )
}
