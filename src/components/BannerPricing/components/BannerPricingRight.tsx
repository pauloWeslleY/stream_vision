import { Stack, Image } from '@chakra-ui/react'

interface BannerRightProps {
  banner: string
}

export const BannerPricingRight = ({ banner }: BannerRightProps) => {
  return (
    <Stack
      flex={'0.3'}
      justify={'center'}
      align={'center'}
      borderRightRadius={'md'}
    >
      <Image src={banner} alt={'Banner'} w={'full'} h={'auto'} />
    </Stack>
  )
}
