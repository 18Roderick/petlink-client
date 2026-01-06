// app/routes/__root.tsx
import { createRootRoute, Outlet } from '@tanstack/react-router'
import { TanStackRouterDevtools } from '@tanstack/router-devtools'
import { Meta, Scripts } from '@tanstack/start'
import type { ReactNode } from 'react'
import { ConfigProvider } from 'antd'
import esES from 'antd/locale/es_ES'
import '@/styles/globals.css'

export const Route = createRootRoute({
  head: () => ({
    meta: [
      {
        charSet: 'utf-8',
      },
      {
        name: 'viewport',
        content: 'width=device-width, initial-scale=1',
      },
      {
        title: 'PetLink - Adopción y Búsqueda de Mascotas',
      },
      {
        name: 'description',
        content: 'Plataforma para conectar mascotas con sus futuros dueños',
      },
    ],
    links: [
      { rel: 'icon', href: '/favicon.ico' },
    ],
  }),
  component: RootComponent,
})

function RootComponent() {
  return (
    <RootDocument>
      <ConfigProvider locale={esES}>
        <Outlet />
      </ConfigProvider>
    </RootDocument>
  )
}

function RootDocument({ children }: Readonly<{ children: ReactNode }>) {
  return (
    <html lang="es">
      <head>
        <Meta />
      </head>
      <body>
        {children}
        <Scripts />
        <TanStackRouterDevtools position="bottom-right" />
      </body>
    </html>
  )
}
