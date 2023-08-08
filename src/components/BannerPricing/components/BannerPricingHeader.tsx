import { Box, Text, chakra } from '@chakra-ui/react'

interface BannerPricingHeaderProps {
  title: string
  description: string
}

export const BannerPricingHeader = (props: BannerPricingHeaderProps) => {
  const { title, description } = props

  return (
    <Box w={'full'} px={[10, 4]} mx={'auto'}>
      <Text
        as={'h3'}
        mb={2}
        fontSize={'5xl'}
        fontWeight={'bold'}
        lineHeight={'tight'}
        bgGradient={'linear(to-r, indigo.300, indigo.600)'}
        bgClip={'text'}
      >
        {title}
      </Text>
      <chakra.p mb={6} fontSize={['lg', 'xl']} color={'zinc.600'}>
        {description}
      </chakra.p>
    </Box>
  )
}
