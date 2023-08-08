import { memo } from 'react'
import { Container, Flex, Stack, Text } from '@chakra-ui/react'
import { CardsProductItem } from './CardsProductItem'
import { CardType } from '../../@types/CardType'

interface CardsProductProps {
  title: string
  cards: CardType[]
}

const CardsProduct = ({ title, cards }: CardsProductProps) => {
  return (
    <Container maxW={'6xl'}>
      <Flex flexDir={'column'} justify={'center'} my={20}>
        <Stack mb={5}>
          <Text
            as={'h2'}
            fontSize={'4xl'}
            fontWeight={'semibold'}
            color={'zinc.800'}
          >
            {title}
          </Text>
        </Stack>

        <Flex flexWrap={'wrap'} gap={4}>
          {cards.map(props => (
            <CardsProductItem key={props.id} card={props} />
          ))}
        </Flex>
      </Flex>
    </Container>
  )
}

export default memo(CardsProduct)
