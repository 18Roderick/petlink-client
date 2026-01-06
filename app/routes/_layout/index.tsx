// app/routes/_layout/index.tsx
import { createFileRoute, Link } from '@tanstack/react-router'
import { Typography } from 'antd'

const { Title } = Typography

export const Route = createFileRoute('/_layout/')({
  component: HomePage,
})

function HomePage() {
  return (
    <div>
      <Title level={1}>Página de inicio</Title>
      <Link to="/admin">Ir a Administrativo</Link>
    </div>
  )
}
