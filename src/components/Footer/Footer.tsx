import { memo, useMemo } from 'react'
import { Box, Container, Stack, Text } from '@chakra-ui/react'
import { SocialButton } from './components/SocialButton'
import FOOTER_ICON from './data/footer_icon'

const Footer = () => {
  const socialIcons = useMemo(() => {
    const response = FOOTER_ICON.map(props => {
      return {
        label: props.label,
        icon: props.icon,
        path: props.path,
      }
    })

    return response
  }, [])

  return (
    <Box bg={'gray.900'} color={'zinc.100'}>
      <Container
        as={Stack}
        maxW={'6xl'}
        py={4}
        spacing={4}
        direction={{ base: 'column', md: 'row' }}
        justify={{ base: 'center', md: 'space-between' }}
        align={{ base: 'center', md: 'center' }}
      >
        <Text>© 2022 StreamVision. All rights reserved</Text>
        <Stack direction={'row'} spacing={6}>
          {socialIcons.map(props => (
            <SocialButton key={props.label} icons={props} />
          ))}
        </Stack>
      </Container>
    </Box>
  )
}

export default memo(Footer)
