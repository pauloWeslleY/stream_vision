import { Flex, Icon, chakra } from '@chakra-ui/react'
import { IoCheckmark } from 'react-icons/io5'

export const HeroPricingIcon = ({ name }: { name: string }) => {
  return (
    <Flex alignSelf="start" w="full">
      <Icon
        boxSize={5}
        mt={1}
        mr={2}
        _light={{ color: 'green.500' }}
        viewBox={'0 0 20 20'}
        fill={'currentColor'}
        as={IoCheckmark}
      />
      <chakra.p fontSize={'lg'} color={'gray.600'}>
        {name}
      </chakra.p>
    </Flex>
  )
}
