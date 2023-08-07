import { ReactElement } from 'react'
import { RouteObject, createBrowserRouter } from 'react-router-dom'
import { App } from '../App'
import { Home } from '../pages/Home/Home'

interface RoutesProps {
  path: string
  element: ReactElement
  children: RouteObject[]
  errorElement?: ReactElement
}

const routes: RoutesProps[] = [
  {
    path: '/',
    element: <App />,
    errorElement: <h1>Not Found</h1>,
    children: [
      {
        path: '/',
        element: <Home />,
      },
    ],
  },
]

export const AppRoutes = createBrowserRouter(routes)
