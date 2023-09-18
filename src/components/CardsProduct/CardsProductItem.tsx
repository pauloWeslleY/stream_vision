import { Image, Flex } from '@chakra-ui/react'
import { CardType } from '../../@types/CardType'

interface CardsProductItemProps {
  card: CardType
}

export const CardsProductItem = ({ card }: CardsProductItemProps) => {
  const { id, banner } = card

  return (
    <Flex
      flexBasis={'10rem'}
      flexGrow={1}
      flexShrink={1}
      shadow={'md'}
      rounded={'md'}
      overflow={'hidden'}
      cursor={'pointer'}
    >
      <Image
        transform={'scale(1.0)'}
        objectFit={'cover'}
        transition={'all 0.3s ease-in-out'}
        _hover={{
          transform: 'scale(1.2)',
        }}
        src={banner}
        alt={id}
      />
    </Flex>
  )
}
