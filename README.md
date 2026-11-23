# Mind

Plataforma web de productividad y organizacion personal y colaborativa, inspirada en conceptos de Notion, Trello y Linear.

Permite a los usuarios organizar actividades, administrar tareas, gestionar proyectos, crear documentos y coordinar espacios de trabajo desde una misma aplicacion.

## Estructura del proyecto

```
Mind/
├── package.json          # Orquestacion con Turbo (npm run dev)
├── turbo.json            # Pipeline de Turbo
├── README.md             # Este archivo
├── backend/              # Django puro (API + admin + autenticacion)
│   ├── manage.py
│   ├── db.sqlite3
│   ├── .venv/            # Entorno virtual Python
│   ├── package.json      # Workspace de Turbo (script dev)
│   └── config/           # Configuracion del proyecto Django
└── frontend/             # React + TypeScript + Vite + Tailwind CSS
    ├── package.json
    ├── vite.config.ts
    ├── index.html
    ├── src/
    │   ├── App.tsx
    │   ├── main.tsx
    │   ├── index.css
    │   ├── components/   # Componentes reutilizables (vacío)
    │   ├── modules/      # Modulos de la app privada (vacío)
    │   ├── views/        # Vistas/paginas (vacío)
    │   └── styles/       # Estilos globales (vacío)
    └── public/           # Assets estaticos
```

## Entornos funcionales

1. **Portal publico** — Landing, caracteristicas, soluciones, contacto, login/registro.
2. **Autenticacion** — Login, registro, recuperacion de contrasena, verificacion de email, cierre de sesion (Django).
3. **Aplicacion privada** — Dashboard, Tareas, Proyectos, Calendario, Documentos, Equipos, Notificaciones, Estadísticas, Perfil y configuracion.
4. **Panel administrativo** — Dashboard admin, gestion de usuarios, workspaces, roles y permisos, equipos, proyectos, reportes globales, auditoria, configuracion.

## Conceptos clave

- **Usuario**: persona que usa la plataforma.
- **Workspace**: espacio de trabajo que agrupa proyectos, tareas y documentos.
- **Proyecto**: conjunto de actividades con un objetivo.
- **Tarea**: unidad de trabajo con responsables, fechas, prioridades y estados.
- **Equipo**: conjunto de usuarios colaboradores.
- **Roles y permisos**: control de acciones a nivel global y por workspace.

Un usuario puede pertenecer a varios workspaces con permisos distintos en cada uno.

## Criterios de desarrollo

- Django puro para el backend, usando herramientas nativas.
- Tailwind CSS para el frontend.
- Arquitectura modular mediante aplicaciones Django independientes.
- Separacion clara entre portal publico, autenticacion, app privada y administracion.
- Componentes y plantillas reutilizables.
- Diseno responsive.
- Validacion de datos y proteccion de rutas segun autenticacion y permisos.

## Comandos disponibles

Desde la raiz del proyecto:

```bash
# Instalar dependencias (una sola vez)
npm install

# Arrancar backend y frontend con un solo comando
npm run dev

# Arrancar solo el backend
npm run dev:backend

# Arrancar solo el frontend
npm run dev:frontend

# Build de produccion
npm run build

# Lint
npm run lint
```

- **Backend**: Django en `http://localhost:8001`
- **Frontend**: Vite en `http://localhost:5173`

## Requisitos previos

- Node.js y npm
- Python 3.x y `venv`
- Turbo (`npm install -g turbo` o incluido en `devDependencies`)

## Estado

Proyecto en etapa inicial. El backend y el frontend estan configurados como esqueleto base; faltan implementar las aplicaciones Django, los modelos, las vistas/endpoints, el frontend de paginas y la integración entre ambos.
