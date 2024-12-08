# Malva UI Clone

Este repositorio contiene un clon de la interfaz de usuario de [Malva Online](https://malvaonline.com/). El proyecto está desarrollado en **React** utilizando **Vite** y **TypeScript**.

## Rutas Implementadas

El proyecto incluye las siguientes rutas:

- `/` - Página principal.
- `/women-page` - Página de "Mujeres".
- `/cart` - Página del carrito.

## Requisitos Previos

Asegúrate de tener instalados los siguientes elementos antes de comenzar:

- **Node.js** (versión 16 o superior)
- **npm** o **yarn**

## Instalación

Clona el repositorio y ejecuta los siguientes comandos:

```bash
# Clona este repositorio
git clone https://github.com/redmoart23/malva-clone-ui.git

# Navega al directorio del proyecto
cd malva-clone-ui

# Instala las dependencias
npm install
# o, si usas yarn
yarn install
```

## Ejecución en Desarrollo

Para iniciar el servidor de desarrollo, ejecuta:

```bash
npm run dev
# o, si usas yarn
yarn dev
```

El proyecto estará disponible en: [http://localhost:5173](http://localhost:5173)

## Scripts Disponibles

- `npm run dev` / `yarn dev` - Inicia el servidor de desarrollo.
- `npm run build` / `yarn build` - Genera los archivos para producción.
- `npm run preview` / `yarn preview` - Inicia un servidor local para previsualizar la compilación de producción.

## Estructura del Proyecto

```plaintext
malva-ui-clone/
├── public/           # Archivos estáticos
├── src/              # Código fuente
│   ├── components/   # Componentes reutilizables
│   ├── pages/        # Páginas principales
│   ├── routes/       # Configuración de rutas
│   ├── styles/       # Estilos globales
│   └── main.tsx      # Punto de entrada
├── .gitignore        # Archivos y carpetas ignorados por Git
├── package.json      # Dependencias y scripts
└── vite.config.ts    # Configuración de Vite
```

## Tecnologías Utilizadas

- **React** - Librería para construir interfaces de usuario.
- **Vite** - Herramienta rápida para desarrollo web.
- **TypeScript** - Superconjunto tipado de JavaScript.

## Contribuciones

¡Las contribuciones son bienvenidas! Si encuentras algún problema o tienes ideas para mejorar el proyecto, por favor abre un *issue* o envía un *pull request*.

## Licencia

Este proyecto se encuentra bajo la Licencia MIT. Consulta el archivo [LICENSE](LICENSE) para más información.
