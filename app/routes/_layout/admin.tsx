// app/routes/_layout/admin.tsx
import { createFileRoute } from '@tanstack/react-router'
import { Typography } from 'antd'

const { Title } = Typography

export const Route = createFileRoute('/_layout/admin')({
  component: AdminPage,
})

function AdminPage() {
  return (
    <div>
      <Title level={1}>Panel Administrativo</Title>
      <p>Área administrativa de PetLink</p>
    </div>
  )
}
