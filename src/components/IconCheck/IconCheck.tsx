import { ReactNode } from 'react'
import { Box, Flex, Icon, chakra } from '@chakra-ui/react'

export const IconCheck = ({ children }: { children: ReactNode }) => (
  <Flex align={'center'}>
    <Flex shrink={0}>
      <Icon
        boxSize={5}
        mt={1}
        mr={2}
        color={'indigo.500'}
        viewBox={'0 0 20 20'}
        fill={'currentColor'}
      >
        <path
          fillRule="evenodd"
          d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
          clipRule="evenodd"
        ></path>
      </Icon>
    </Flex>
    <Box ml={4}>
      <chakra.span
        mt={2}
        fontWeight={'medium'}
        fontSize={'lg'}
        letterSpacing={'wide'}
        color={'zinc.400'}
      >
        {children}
      </chakra.span>
    </Box>
  </Flex>
)
