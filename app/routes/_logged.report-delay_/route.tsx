import {
  Typography,
  Form,
  Input,
  InputNumber,
  Select,
  Upload,
  Button,
  Card,
  List,
  Tag,
  message,
} from 'antd'
import { useState } from 'react'
import type { UploadFile } from 'antd/es/upload/interface'
const { Title, Text, Paragraph } = Typography
import { useUserContext } from '@/core/context'
import dayjs from 'dayjs'
import { useLocation, useNavigate, useParams } from '@remix-run/react'
import { useUploadPublic } from '@/plugins/upload/client'
import { Api } from '@/core/trpc'
import { PageLayout } from '@/designSystem'

export default function ReportDelayPage() {
  const { user } = useUserContext()
  const [form] = Form.useForm()
  const [fileList, setFileList] = useState<UploadFile[]>([])
  const { mutateAsync: uploadFile } = useUploadPublic()

  const { data: routes } = Api.route.findMany.useQuery({})

  const { data: recentDelays, refetch: refetchDelays } =
    Api.delay.findMany.useQuery({
      include: {
        route: true,
        delayVerifications: true,
        user: true,
      },
      orderBy: { createdAt: 'desc' },
      take: 5,
    })

  const { mutateAsync: createDelay } = Api.delay.create.useMutation()

  const handleSubmit = async (values: any) => {
    try {
      let photoUrl = undefined

      if (fileList.length > 0) {
        const uploadResult = await uploadFile({
          file: fileList[0].originFileObj as File,
        })
        photoUrl = uploadResult.url
      }

      await createDelay({
        data: {
          latitude: values.latitude,
          longitude: values.longitude,
          delayMinutes: values.delayMinutes,
          description: values.description,
          photoUrl,
          status: 'PENDING',
          userId: user?.id as string,
          routeId: values.routeId,
        },
      })

      message.success('Delay reported successfully!')
      form.resetFields()
      setFileList([])
      refetchDelays()
    } catch (error) {
      message.error('Failed to report delay')
    }
  }

  return (
    <PageLayout layout="narrow">
      <div style={{ padding: '24px' }}>
        <Title level={2}>
          <i className="las la-clock" /> Report Transport Delay
        </Title>
        <Text>
          Help other passengers by reporting transport delays in your area.
        </Text>

        <Card style={{ marginTop: '24px' }}>
          <Form form={form} layout="vertical" onFinish={handleSubmit}>
            <Form.Item
              name="routeId"
              label="Transport Line"
              rules={[{ required: true }]}
            >
              <Select
                placeholder="Select transport line"
                options={routes?.map(route => ({
                  label: `${route.name} (${route.type})`,
                  value: route.id,
                }))}
              />
            </Form.Item>

            <div
              style={{
                display: 'grid',
                gridTemplateColumns: '1fr 1fr',
                gap: '16px',
              }}
            >
              <Form.Item
                name="latitude"
                label="Latitude"
                rules={[{ required: true }]}
              >
                <Input placeholder="Enter latitude" />
              </Form.Item>

              <Form.Item
                name="longitude"
                label="Longitude"
                rules={[{ required: true }]}
              >
                <Input placeholder="Enter longitude" />
              </Form.Item>
            </div>

            <Form.Item
              name="delayMinutes"
              label="Estimated Delay (minutes)"
              rules={[{ required: true }]}
            >
              <InputNumber min={1} style={{ width: '100%' }} />
            </Form.Item>

            <Form.Item name="description" label="Description">
              <Input.TextArea
                rows={4}
                placeholder="Describe the delay situation"
              />
            </Form.Item>

            <Form.Item label="Photo Evidence">
              <Upload
                listType="picture-card"
                fileList={fileList}
                onChange={({ fileList }) => setFileList(fileList)}
                beforeUpload={() => false}
                maxCount={1}
              >
                <div>
                  <i className="las la-camera" />
                  <div style={{ marginTop: 8 }}>Upload</div>
                </div>
              </Upload>
            </Form.Item>

            <Button type="primary" htmlType="submit" block>
              <i className="las la-paper-plane" /> Submit Report
            </Button>
          </Form>
        </Card>

        <Title level={3} style={{ marginTop: '24px' }}>
          <i className="las la-history" /> Recent Delays
        </Title>

        <List
          dataSource={recentDelays}
          renderItem={delay => (
            <Card style={{ marginBottom: '16px' }}>
              <div
                style={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'flex-start',
                }}
              >
                <div>
                  <Text strong>{delay.route?.name}</Text>
                  <br />
                  <Text type="secondary">
                    Reported by {delay.user?.name || 'Anonymous'} •
                    {delay.delayMinutes.toString()} minutes delay
                  </Text>
                  {delay.description && (
                    <Paragraph style={{ marginTop: '8px' }}>
                      {delay.description}
                    </Paragraph>
                  )}
                </div>
                <Tag color={delay.status === 'PENDING' ? 'orange' : 'green'}>
                  {delay.status}
                </Tag>
              </div>
              {delay.photoUrl && (
                <img
                  src={delay.photoUrl}
                  alt="Delay evidence"
                  style={{
                    marginTop: '16px',
                    maxWidth: '200px',
                    borderRadius: '4px',
                  }}
                />
              )}
              <Text
                type="secondary"
                style={{ display: 'block', marginTop: '8px' }}
              >
                <i className="las la-check-circle" />
                {delay.delayVerifications?.length || 0} verifications
              </Text>
            </Card>
          )}
        />
      </div>
    </PageLayout>
  )
}
