import { memo } from 'react'
import { Container, Flex, HStack, VStack, chakra } from '@chakra-ui/react'
import { HeroPricingIcon } from './HeroPricingIcon'

const HeroPricing = () => {
  return (
    <Container maxW={'6xl'}>
      <Flex
        flexDir={{ base: 'column', md: 'row' }}
        justify={'center'}
        mb={{ base: 6, sm: 0 }}
        mt={10}
      >
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
              Hobby
            </chakra.span>
            <HStack spacing={3}>
              <chakra.span
                fontWeight="bold"
                fontSize="6xl"
                textShadow="2px 0 currentcolor"
              >
                $79
              </chakra.span>
              <chakra.span
                alignSelf="center"
                fontSize="3xl"
                _light={{ color: 'gray.400' }}
              >
                /month
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
              <HeroPricingIcon name="Suppression Management" />
              <HeroPricingIcon name="Email Tracking and Analytics" />
              <HeroPricingIcon name="99.99% Guaranteed Uptime SLA" />
            </VStack>
          </VStack>
        </Flex>

        <Flex
          flex={{ base: 1, lg: 'initial' }}
          w={{ lg: 2.4 / 7 }}
          rounded="lg"
          bg="white"
          _dark={{ bg: 'gray.700' }}
          mt={{ base: 4, sm: -4 }}
          shadow="xl"
          zIndex={30}
          direction="column"
        >
          <VStack
            spacing={1}
            justifyContent="center"
            p={8}
            textAlign="center"
            w="full"
            shadow="xl"
          >
            <chakra.span fontSize="3xl" fontWeight="bold">
              Growth
            </chakra.span>
            <HStack spacing={3}>
              <chakra.span
                fontWeight="bold"
                fontSize="6xl"
                textShadow="2px 0 currentcolor"
              >
                $149
              </chakra.span>
              <chakra.span
                alignSelf="center"
                fontSize="3xl"
                _light={{ color: 'gray.400' }}
              >
                /month
              </chakra.span>
            </HStack>
          </VStack>
          <VStack
            fontSize="sm"
            h="full"
            roundedBottom="lg"
            spacing={8}
            bg="gray.100"
            _dark={{ bg: 'gray.800' }}
            p={12}
          >
            <VStack spacing={4} w="full" direction="column" alignItems="start">
              <HeroPricingIcon name="Suppression Management" />
              <HeroPricingIcon name="Email Tracking and Analytics" />
              <HeroPricingIcon name="99.99% Guaranteed Uptime SLA" />
              <HeroPricingIcon name="1,000 Email Address Validations" />
              <HeroPricingIcon name="Limited 24/7 Ticket Support" />
            </VStack>
          </VStack>
        </Flex>

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
            justifyContent="center"
            p={8}
            textAlign="center"
            w="full"
            shadow="xl"
          >
            <chakra.span fontSize="3xl" fontWeight="bold">
              Scale
            </chakra.span>
            <HStack spacing={3}>
              <chakra.span
                fontWeight="bold"
                fontSize="6xl"
                textShadow="2px 0 currentcolor"
              >
                $349
              </chakra.span>
              <chakra.span
                alignSelf="center"
                fontSize="3xl"
                _light={{ color: 'gray.400' }}
              >
                /month
              </chakra.span>
            </HStack>
          </VStack>
          <VStack
            fontSize="sm"
            spacing={8}
            h="full"
            bg="gray.100"
            _dark={{ bg: 'gray.800' }}
            borderBottomRightRadius="lg"
            p={12}
          >
            <VStack spacing={4} w="full" direction="column" alignItems="start">
              <HeroPricingIcon name="Suppression Management" />
              <HeroPricingIcon name="Email Tracking and Analytics" />
              <HeroPricingIcon name="99.99% Guaranteed Uptime SLA" />
            </VStack>
          </VStack>
        </Flex>
      </Flex>
    </Container>
  )
}

export default memo(HeroPricing)
