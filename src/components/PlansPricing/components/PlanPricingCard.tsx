import { Flex, Box, Text, chakra } from '@chakra-ui/react'

interface PlanPricingCardProps {
  plan: string
  month: string
  price: string
}

interface PlansProps {
  plans: PlanPricingCardProps
}

export const PlanPricingCard = ({ plans }: PlansProps) => {
  const { plan, price, month } = plans

  return (
    <Box rounded={['none', 'lg']} shadow={['none', 'md']} bg={'indigo.100'}>
      <Flex
        flexDir={'column'}
        justify={'space-between'}
        p={'6'}
        borderBottomWidth={'1px'}
        color={'zinc.800'}
      >
        <chakra.p
          mb={1}
          fontSize={'lg'}
          fontWeight={'semibold'}
          color={'indigo.400'}
        >
          {plan}
        </chakra.p>
        <Text
          mb={2}
          fontSize={'5xl'}
          fontWeight={['bold', 'extrabold']}
          lineHeight={'tight'}
          color={'zinc.800'}
        >
          ${price}
          <chakra.span
            fontSize={'2xl'}
            fontWeight={'medium'}
            color={'zinc.600'}
          >
            /{month}
          </chakra.span>
        </Text>
      </Flex>
    </Box>
  )
}
