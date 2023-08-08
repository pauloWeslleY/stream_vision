import { Flex, VStack, chakra, HStack } from '@chakra-ui/react'
import { HeroPricingIcon } from './HeroPricingIcon'

interface HeroPricingCardProps {
  title: string
  price: string
  month: string
  plans: {
    name: string
  }[]
}

export const HeroPricingCard = (props: HeroPricingCardProps) => {
  const { title, price, month, plans } = props

  return (
    <Flex
      flex={{ sm: 1, lg: 'initial' }}
      flexDir={'column'}
      w={{ lg: 2.3 / 7 }}
      rounded={'lg'}
      borderTopRightRadius={0}
      borderBottomLeftRadius={'lg'}
      bg={'zinc.100'}
      my={6}
    >
      <VStack
        spacing={1}
        justifyContent={'center'}
        p={8}
        textAlign={'center'}
        w={'full'}
        shadow={'xl'}
      >
        <chakra.span fontSize="3xl" fontWeight="bold">
          {title}
        </chakra.span>
        <HStack spacing={3}>
          <chakra.span
            fontWeight={'bold'}
            fontSize={'6xl'}
            textShadow={'2px 0 currentcolor'}
          >
            {price}
          </chakra.span>
          <chakra.span
            alignSelf={'center'}
            fontSize={'3xl'}
            _light={{ color: 'gray.400' }}
          >
            {month}
          </chakra.span>
        </HStack>
      </VStack>
      <VStack
        fontSize={'sm'}
        spacing={8}
        h={'full'}
        bg={'indigo.100'}
        borderBottomLeftRadius={'lg'}
        p={12}
      >
        <VStack
          spacing={4}
          w={'full'}
          direction={'column'}
          alignItems={'start'}
        >
          {plans.map(plan => (
            <HeroPricingIcon key={plan.name} name={plan.name} />
          ))}
          <HeroPricingIcon name="Suppression Management" />
          <HeroPricingIcon name="Email Tracking and Analytics" />
          <HeroPricingIcon name="99.99% Guaranteed Uptime SLA" />
        </VStack>
      </VStack>
    </Flex>
  )
}
