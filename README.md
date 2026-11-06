# Pizzería Mamma Mia – Hito 7

Aplicación web desarrollada con React y JavaScript, como parte del curso Full Stack JavaScript.

## Tecnologías utilizadas

- React
- JavaScript
- React Router DOM
- Context API
- Bootstrap
- Vite
- Fetch API
- CSS

## Estructura del proyecto

Hito7/
│
├── docs/
│   ├── assets/
│   └── index.html
│
├── public/
│
├── src/
│   │
│   ├── componentes/
│   │   └── Navbar.jsx
│   │
│   ├── context/
│   │   ├── CartContext.jsx
│   │   └── UserContext.jsx
│   │
│   ├── pages/
│   │   ├── Home.jsx
│   │   ├── Register.jsx
│   │   ├── login.jsx
│   │   ├── Cart.jsx
│   │   ├── Pizzas.jsx
│   │   ├── profile.jsx
│   │   └── notfound.jsx
│   │
│   ├── App.jsx
│   ├── main.jsx
│   └── index.css
│
├── index.html
├── package.json
├── package-lock.json
└── vite.config.js
```

## Funcionalidades

### Página principal

- Visualización del catálogo de pizzas.
- Navegación entre las distintas secciones de la aplicación.

### Detalle de pizzas

- Visualización de información individual de cada pizza.
- Obtención de los datos desde una API mediante Fetch.
- Uso de parámetros dinámicos con `useParams`.

### Carrito de compras

- Visualización de los productos agregados.
- Cálculo automático del total de la compra.
- Botón de pago deshabilitado cuando no hay sesión iniciada o el carrito está vacío.

### Gestión de usuario

- Manejo del estado de sesión mediante Context API.
- Función de cierre de sesión (`logout`).
- Visualización condicional de las opciones de navegación según el estado del usuario.

### Rutas protegidas

- Acceso al perfil condicionado a una sesión iniciada.
- Redirección al Login cuando no existe una sesión activa.
- Restricción de acceso a Login y Register cuando el usuario ya tiene una sesión iniciada.

## Repositorio

[GitHub – Hito 7](https://github.com/gfazzini/Hito7)

