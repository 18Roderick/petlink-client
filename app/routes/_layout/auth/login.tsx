// app/routes/_layout/auth/login.tsx
import { createFileRoute, useNavigate } from '@tanstack/react-router'
import { Button, Card, Checkbox, Col, Form, Input, Row, Typography, message } from 'antd'
import { LockOutlined, UserOutlined } from '@ant-design/icons'
import { useAuthStore } from '@/lib/stores/auth'

const { Link } = Typography

export const Route = createFileRoute('/_layout/auth/login')({
  component: LoginPage,
})

interface LoginFormValues {
  username: string
  password: string
  remember: boolean
}

function LoginPage() {
  const [form] = Form.useForm<LoginFormValues>()
  const navigate = useNavigate()
  const { login, isLoading } = useAuthStore()

  const onFinish = async (values: LoginFormValues) => {
    try {
      await login(values.username, values.password)
      message.success('¡Inicio de sesión exitoso!')
      navigate({ to: '/' })
    } catch (error) {
      message.error('Error al iniciar sesión')
    }
  }

  return (
    <Row gutter={{ xs: 8, sm: 16, md: 24 }} justify="center" align="middle" style={{ minHeight: '60vh' }}>
      <Col xs={22} sm={16} md={12} lg={8}>
        <Card>
          <Form
            form={form}
            name="normal_login"
            className="login-form"
            initialValues={{ remember: true }}
            onFinish={onFinish}
          >
            <Form.Item
              name="username"
              rules={[{ required: true, message: 'Por favor ingresa tu usuario!' }]}
            >
              <Input
                prefix={<UserOutlined style={{ color: 'rgba(0,0,0,.25)' }} />}
                placeholder="Usuario"
              />
            </Form.Item>
            <Form.Item
              name="password"
              rules={[{ required: true, message: 'Por favor ingresa tu contraseña!' }]}
            >
              <Input.Password
                prefix={<LockOutlined style={{ color: 'rgba(0,0,0,.25)' }} />}
                placeholder="Contraseña"
              />
            </Form.Item>
            <Form.Item>
              <Form.Item name="remember" valuePropName="checked" noStyle>
                <Checkbox>Recordarme</Checkbox>
              </Form.Item>
              <Link style={{ float: 'right' }}>¿Olvidaste tu contraseña?</Link>
            </Form.Item>
            <Form.Item>
              <Button type="primary" htmlType="submit" className="login-form-button" block loading={isLoading}>
                Iniciar Sesión
              </Button>
              O <Link>¡regístrate ahora!</Link>
            </Form.Item>
          </Form>
        </Card>
      </Col>
    </Row>
  )
}
