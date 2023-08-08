import { memo } from 'react'
import {
  Container,
  HStack,
  Stack,
  Flex,
  Box,
  Heading,
  IconButton,
  useDisclosure,
} from '@chakra-ui/react'
import { HamburgerIcon, CloseIcon } from '@chakra-ui/icons'
import { ROUTES } from '../../routes/routes'
import { NavItem } from './index'

const NavBar = () => {
  const { isOpen, onOpen, onClose } = useDisclosure()

  return (
    <Box bg={'gray.900'} px={4}>
      <Container maxW={'6xl'}>
        <Flex as={'nav'} h={16} align={'center'} justify={'space-between'}>
          <IconButton
            size={'md'}
            icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
            aria-label={'Open Menu'}
            display={{ md: 'none' }}
            onClick={isOpen ? onClose : onOpen}
          />
          <HStack spacing={8} alignItems={'center'}>
            <Heading
              fontWeight={'regular'}
              fontSize={'2xl'}
              color={'indigo.100'}
            >
              StreamVision
            </Heading>
          </HStack>
          <HStack spacing={4} display={{ base: 'none', md: 'flex' }}>
            {ROUTES.map(props => (
              <NavItem key={props.to} navItem={props} />
            ))}
          </HStack>
        </Flex>

        {isOpen ? (
          <Box pb={4} display={{ md: 'none' }}>
            <Stack as={'nav'} spacing={4}>
              {ROUTES.map(props => (
                <NavItem key={props.to} navItem={props} />
              ))}
            </Stack>
          </Box>
        ) : null}
      </Container>
    </Box>
  )
}

export default memo(NavBar)
