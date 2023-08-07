import React from 'react'
import ReactDOM from 'react-dom/client'
import { ChakraProvider } from '@chakra-ui/react'
import { RouterProvider } from 'react-router-dom'
import { theme } from './themes/themes.ts'
import { AppRoutes } from './routes/app.routes.tsx'

const rootElement = document.getElementById('root')
ReactDOM.createRoot(rootElement!).render(
  <React.StrictMode>
    <ChakraProvider theme={theme}>
      <RouterProvider router={AppRoutes} />
    </ChakraProvider>
  </React.StrictMode>
)
