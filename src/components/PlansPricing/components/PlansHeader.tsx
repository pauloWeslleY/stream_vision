import { Box, Text, chakra } from '@chakra-ui/react'

interface PlansHeaderProps {
  title: string
  description: string
}

export const PlansHeader = (props: PlansHeaderProps) => {
  const { title, description } = props

  return (
    <Box w="full" px={[10, 4]} mx={'auto'} textAlign={'center'}>
      <Text mb={2} fontSize={'5xl'} fontWeight={'bold'} lineHeight={'tight'}>
        {title}
      </Text>
      <chakra.p mb={6} fontSize={['lg', 'xl']} color={'gray.700'}>
        {description}
      </chakra.p>
    </Box>
  )
}
