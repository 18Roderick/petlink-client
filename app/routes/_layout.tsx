// app/routes/_layout.tsx
import { createFileRoute, Link, Outlet } from '@tanstack/react-router'
import { Layout } from 'antd'
import '@/styles/navbar.css'

const { Header, Content } = Layout

export const Route = createFileRoute('/_layout')({
  component: LayoutComponent,
})

function LayoutComponent() {
  return (
    <Layout style={{ minHeight: '100vh' }}>
      <Header style={{ position: 'sticky', top: 0, zIndex: 1, width: '100%', padding: 0 }}>
        <nav className="navbar-container">
          <div className="brand-title">
            <h4>
              <Link to="/">PetLink</Link>
            </h4>
          </div>
          <ul className="ul-nav">
            <li>
              <Link to="/adopta">Adopta</Link>
            </li>
            <li>
              <Link to="/linker">Linker</Link>
            </li>
          </ul>
        </nav>
      </Header>
      <Content style={{ padding: '24px 50px' }}>
        <Outlet />
      </Content>
    </Layout>
  )
}
