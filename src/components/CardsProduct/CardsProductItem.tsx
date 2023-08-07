import { Image, Flex } from '@chakra-ui/react'
import { CardType } from '../../@types/CardType'

interface CardsProductItemProps {
  card: CardType
}

export const CardsProductItem = ({ card }: CardsProductItemProps) => {
  const { banner } = card

  return (
    <Flex
      flexBasis={'13rem'}
      flexGrow={1}
      flexShrink={1}
      flexDir={'column'}
      shadow={'lg'}
      rounded={'lg'}
      overflow={'hidden'}
    >
      <Image w={'full'} h={72} fit={'cover'} src={banner} alt={banner} />
    </Flex>
  )
}
