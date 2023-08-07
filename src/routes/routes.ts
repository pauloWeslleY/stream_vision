interface IRouterProps {
  label: string
  path: string
}

export const ROUTES: Array<IRouterProps> = [
  {
    label: 'Home',
    path: '/',
  },
  {
    label: 'Service',
    path: '/service',
  },
  {
    label: 'About',
    path: '/about',
  },
  {
    label: 'Contact',
    path: '/contact',
  },
]
