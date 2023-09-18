import { Button, ButtonProps } from '@chakra-ui/react'

interface BtnHeroProps extends ButtonProps {
  title: string
}

export const BtnHero = ({ title, ...rest }: BtnHeroProps) => {
  return (
    <Button
      {...rest}
      px={8}
      bg={'indigo.600'}
      color={'zinc.100'}
      rounded={'md'}
      _hover={{
        transform: 'translateY(-2px)',
        boxShadow: 'lg',
      }}
      _active={{
        color: 'indigo.700',
        bg: 'indigo.400',
      }}
    >
      {title}
    </Button>
  )
}
