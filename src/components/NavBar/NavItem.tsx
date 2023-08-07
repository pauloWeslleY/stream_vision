import { memo } from 'react'
import { Link as ReactRouterLink, useLocation } from 'react-router-dom'
import { Link } from '@chakra-ui/react'

interface NavItemProps {
  to: string
  label: string
}

const NavItem = ({ label, to }: NavItemProps) => {
  const location = useLocation()
  const isActive = location.pathname === to

  return (
    <Link
      as={ReactRouterLink}
      to={to}
      fontWeight={isActive ? 'bold' : 'regular'}
      bg={isActive ? 'indigo.400' : 'transparent'}
      color={isActive ? 'zinc.800' : 'zinc.100'}
      px={2}
      py={1}
      rounded={'md'}
      transition={'all .2s ease-out'}
      _hover={{
        textDecoration: 'none',
        bg: 'indigo.500',
      }}
    >
      {label}
    </Link>
  )
}

export default memo(NavItem)
