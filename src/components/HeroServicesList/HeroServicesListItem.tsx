import { Flex, Icon, chakra } from '@chakra-ui/react'

export const HeroServicesListItem = ({ label }: { label: string | any }) => (
  <Flex>
    <Icon
      boxSize={5}
      mt={1}
      mr={2}
      color={'indigo.600'}
      viewBox={'0 0 20 20'}
      fill={'currentColor'}
    >
      <path
        fillRule="evenodd"
        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
        clipRule="evenodd"
      ></path>
    </Icon>
    <chakra.p fontSize={'lg'} color={'zinc.700'}>
      {label}
    </chakra.p>
  </Flex>
)
