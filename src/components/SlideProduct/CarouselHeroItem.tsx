import { Flex } from '@chakra-ui/react'
import { SlideType } from '../../@types/SlideType'

interface CarouselHeroItemProps {
  cards: SlideType
}

export const CarouselHeroItem = ({ cards }: CarouselHeroItemProps) => {
  const { imageUrl } = cards

  return (
    <Flex
      w={'100%'}
      maxW={'100%'}
      h={{ base: '50vh', lg: '75vh' }}
      bgImage={`url(${imageUrl})`}
      bgSize={'cover'}
      bgPosition={'center center'}
    />
  )
}
