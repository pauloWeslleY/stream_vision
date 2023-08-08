import { ElementType } from 'react'
import { VisuallyHidden, chakra } from '@chakra-ui/react'

interface SocialButtonProps {
  label: string
  path: string
  icon: ElementType
}

interface SocialProps {
  icons: SocialButtonProps
}

export const SocialButton = ({ icons }: SocialProps) => {
  const { icon: Icon, label, path } = icons

  return (
    <chakra.button
      bg={'blackAlpha.100'}
      as={'a'}
      href={path}
      w={8}
      h={8}
      rounded={'full'}
      cursor={'pointer'}
      display={'inline-flex'}
      alignItems={'center'}
      justifyContent={'center'}
      transition={'background 0.3s ease'}
      _hover={{
        bg: 'indigo.200',
        color: 'zinc.800',
      }}
    >
      <VisuallyHidden>{label}</VisuallyHidden>
      <Icon />
    </chakra.button>
  )
}
