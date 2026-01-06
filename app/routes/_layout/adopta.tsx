// app/routes/_layout/adopta.tsx
import { createFileRoute } from '@tanstack/react-router'
import { Button, Typography } from 'antd'
import { DownloadOutlined } from '@ant-design/icons'

const { Title } = Typography

export const Route = createFileRoute('/_layout/adopta')({
  component: AdoptaPage,
})

function AdoptaPage() {
  return (
    <div className="Adopta">
      <Title level={2}>Adopta una Mascota</Title>
      <Button type="primary" icon={<DownloadOutlined />} size="large">
        Buscar Mascotas
      </Button>
    </div>
  )
}
