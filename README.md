# **Instalar paquetes**
### Por consola ejecutar `yarn install`

# **Archivos de entorno**
## Crear archivo .env en la raiz del proyecto con la variable:
PUBLIC_URL=""
REACT_APP_API_ENDPOINT="https://api.mercadolibre.com"

## Crear archivo .env.production.local en la raiz del proyecto con la variable:
PUBLIC_URL="/ml-challenge"
REACT_APP_API_ENDPOINT="https://api.mercadolibre.com"

# Mejoras pendientes
- Mejorar imagenes
  - En listado mejorar calidad de imagenes.
  - En detalle determinar imagen segun tamaño de pantalla.
- Mejorar Tipado en varios puntos de la aplicación como por ejemplo en Listado de productos o en servicios.
- Manejo del git:
  - Commits más chicos y mas especificos.
  - Crear branchs para cada tarea.
- Buscar categoria por propiedad.
- Resolver TODOs.
- Realizar test unitarios, de integración y e2e.

# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `yarn start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `yarn test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `yarn build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.
