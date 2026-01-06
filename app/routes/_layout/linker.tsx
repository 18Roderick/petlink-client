// app/routes/_layout/linker.tsx
import { createFileRoute } from '@tanstack/react-router'
import { Typography } from 'antd'

const { Title } = Typography

export const Route = createFileRoute('/_layout/linker')({
  component: LinkerPage,
})

function LinkerPage() {
  return (
    <div>
      <Title level={1}>Página Linker</Title>
    </div>
  )
}
