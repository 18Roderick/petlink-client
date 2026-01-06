# PetLink Client - Modernized

## 🐾 Misión
Conectar mascotas con sus futuros dueños a través de una plataforma moderna y eficiente que facilite la adopción y búsqueda de animales perdidos.

## 🎯 Objetivos
- Facilitar el proceso de adopción de mascotas
- Permitir a usuarios reportar y buscar mascotas perdidas (Linker)
- Proporcionar un panel administrativo para gestionar el contenido
- Ofrecer una experiencia de usuario moderna, rápida y accesible

## 🚀 Stack Tecnológico Modernizado

### Frontend Framework
- **React 18.3+** - Última versión con mejoras de rendimiento
- **TanStack Start** - Framework full-stack moderno con SSR
- **TanStack Router** - Enrutamiento type-safe con file-based routing
- **TypeScript 5.7+** - Type safety en todo el proyecto

### UI & Styling
- **Ant Design 5.22+** - Biblioteca de componentes moderna
- **CSS Modules** - Estilos modulares y mantenibles

### State Management
- **Zustand 5.0+** - Estado global ligero y eficiente
- **TanStack Query 5.62+** - Gestión de estado del servidor y cache

### Build & Development
- **Vite 6.0+** - Build tool ultra-rápido
- **Vinxi** - Server framework para TanStack Start
- **ESLint 9+** - Linting con configuración moderna
- **Prettier 3.4+** - Formateo de código consistente

## 📋 Requerimientos del Sistema

### Requerimientos Funcionales
1. **Autenticación de Usuarios**
   - Login con usuario y contraseña
   - Persistencia de sesión
   - Logout seguro
   - (Futuro) Recuperación de contraseña
   - (Futuro) Registro de nuevos usuarios

2. **Módulo de Adopción (Adopta)**
   - Listado de mascotas disponibles para adopción
   - Filtros de búsqueda (tipo, edad, ubicación)
   - Detalle de mascota con información completa
   - Solicitud de adopción

3. **Módulo Linker (Búsqueda)**
   - Reporte de mascotas perdidas
   - Búsqueda de mascotas reportadas
   - Sistema de matching
   - Notificaciones de coincidencias

4. **Panel Administrativo**
   - Gestión de mascotas
   - Gestión de solicitudes de adopción
   - Gestión de usuarios
   - Estadísticas y reportes

### Requerimientos No Funcionales
1. **Rendimiento**
   - Tiempo de carga inicial < 3 segundos
   - SSR para mejorar SEO y percepción de velocidad
   - Code splitting automático
   - Optimización de imágenes

2. **Seguridad**
   - Type safety con TypeScript
   - Validación de formularios con Formik + Yup
   - Protección de rutas
   - Sanitización de inputs

3. **Accesibilidad**
   - WCAG 2.1 nivel AA
   - Componentes Ant Design con soporte de accesibilidad
   - Navegación por teclado
   - Screen reader friendly

4. **SEO**
   - Server-Side Rendering (SSR)
   - Meta tags dinámicos
   - Sitemap generado
   - URLs semánticas

5. **Mantenibilidad**
   - Código TypeScript type-safe
   - Arquitectura modular
   - Componentes reutilizables
   - Documentación clara

## 🏗️ Arquitectura del Proyecto

```
petlink-client/
├── app/
│   ├── routes/                 # File-based routing (TanStack Router)
│   │   ├── __root.tsx         # Root layout con ConfigProvider
│   │   ├── _layout.tsx        # Layout principal con navbar
│   │   └── _layout/           # Rutas con layout
│   │       ├── index.tsx      # Página de inicio
│   │       ├── adopta.tsx     # Módulo de adopción
│   │       ├── linker.tsx     # Módulo de búsqueda
│   │       ├── admin.tsx      # Panel administrativo
│   │       └── auth/
│   │           └── login.tsx  # Login de usuarios
│   ├── lib/
│   │   └── stores/            # Zustand stores
│   │       └── auth.ts        # Store de autenticación
│   ├── styles/                # Estilos globales
│   │   ├── globals.css
│   │   └── navbar.css
│   ├── client.tsx             # Entry point del cliente
│   ├── ssr.tsx                # Entry point del servidor
│   └── router.tsx             # Configuración del router
├── public/                    # Assets estáticos
├── app.config.ts              # Configuración de TanStack Start
├── tsconfig.json              # Configuración de TypeScript
└── package.json               # Dependencies
```

## 🛠️ Comandos de Desarrollo

### Instalación
```bash
npm install
```

### Desarrollo
```bash
npm run dev
```
Inicia el servidor de desarrollo en http://localhost:3000

### Build de Producción
```bash
npm run build
```

### Iniciar en Producción
```bash
npm run start
```

### Linting
```bash
npm run lint
```

### Type Checking
```bash
npm run typecheck
```

## 🔄 Migración desde CRA

### Cambios Principales
1. **React 16 → React 18**
   - ReactDOM.render → createRoot/hydrateRoot
   - Concurrent features
   - Automatic batching

2. **React Router 5 → TanStack Router**
   - File-based routing
   - Type-safe routing
   - Better code splitting

3. **Redux → Zustand**
   - API más simple
   - Menos boilerplate
   - TypeScript nativo
   - Mejor performance

4. **Ant Design 3 → Ant Design 5**
   - API modernizada
   - Mejor accesibilidad
   - CSS-in-JS mejorado
   - Componentes actualizados

5. **JavaScript → TypeScript**
   - Type safety completo
   - Mejor developer experience
   - Autocompletado mejorado
   - Menos errores en runtime

## 📝 Convenciones de Código

### Naming
- Componentes: PascalCase (`HomePage`, `LoginPage`)
- Funciones/variables: camelCase (`useAuthStore`, `onFinish`)
- Archivos de rutas: kebab-case (`auth/login.tsx`)
- CSS classes: kebab-case (`navbar-container`)

### TypeScript
- Usar interfaces para props y tipos de datos
- Evitar `any`, usar tipos específicos
- Utilizar utility types cuando sea apropiado
- Documentar tipos complejos

### Componentes
- Un componente por archivo
- Preferir functional components con hooks
- Usar TypeScript para props
- Extraer lógica compleja a custom hooks

## 🚦 Estado del Proyecto

### ✅ Completado
- [x] Configuración de TanStack Start
- [x] Migración a TypeScript
- [x] Configuración de rutas básicas
- [x] Sistema de autenticación con Zustand
- [x] Actualización a Ant Design 5
- [x] Layout y navegación
- [x] Páginas principales (Home, Adopta, Linker, Admin, Login)

### 🔄 En Progreso
- [ ] Integración con API backend
- [ ] Funcionalidad completa de adopción
- [ ] Sistema de búsqueda Linker
- [ ] Panel administrativo completo

### 📅 Próximos Pasos
- [ ] Tests con Vitest
- [ ] E2E tests con Playwright
- [ ] Optimización de rendimiento
- [ ] PWA capabilities
- [ ] Internacionalización (i18n)
- [ ] Modo oscuro
- [ ] Notificaciones en tiempo real

## 🤝 Contribución

Para contribuir al proyecto:
1. Fork el repositorio
2. Crea una rama para tu feature (`git checkout -b feature/AmazingFeature`)
3. Commit tus cambios (`git commit -m 'Add some AmazingFeature'`)
4. Push a la rama (`git push origin feature/AmazingFeature`)
5. Abre un Pull Request

## 📄 Licencia

Este proyecto es privado y pertenece a PetLink.

## 👥 Equipo

Desarrollado con ❤️ por el equipo de PetLink

---

**Última actualización:** Enero 2026
**Versión:** 0.2.0 (Modernizada con TanStack Start + TypeScript)
