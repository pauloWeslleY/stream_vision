interface IRouterProps {
  label: string
  to: string
}

export const ROUTES: Array<IRouterProps> = [
  {
    label: 'Home',
    to: '/',
  },
  {
    label: 'Produtos',
    to: '/service',
  },
  {
    label: 'Serviços',
    to: '/about',
  },
  {
    label: 'Contatos',
    to: '/contact',
  },
]
