import { memo } from 'react'
import { SimpleGrid, VStack, Box, chakra } from '@chakra-ui/react'
import { HeroServicesListItem } from './HeroServicesListItem'

interface HeroServicesListProps {
  title: string
  description: string
  servicesList: {
    label: string
  }[]
}

const HeroServicesList = (props: HeroServicesListProps) => {
  const { title, description, servicesList } = props

  return (
    <Box as={'section'} shadow={'md'} bg={'zinc.200'} px={16} py={20} my={5}>
      <SimpleGrid
        alignItems={'center'}
        justifyContent={'center'}
        columns={{ base: 1, lg: 2 }}
        spacingY={{ base: 10, lg: 32 }}
        spacingX={{ base: 10, lg: 24 }}
      >
        <Box>
          <chakra.h2
            mb={3}
            fontSize={{ base: '3xl', md: '4xl' }}
            fontWeight={'extrabold'}
            textAlign={{ base: 'center', sm: 'left' }}
            _light={{ color: 'black' }}
            lineHeight={'shorter'}
            letterSpacing={'tight'}
          >
            {title}
          </chakra.h2>
          <chakra.p
            mb={6}
            fontSize={{ base: 'lg', md: 'xl' }}
            textAlign={{ base: 'center', sm: 'left' }}
            color={'gray.600'}
          >
            {description}
          </chakra.p>
        </Box>
        <VStack
          direction={'column'}
          alignItems={'start'}
          flexGrow={1}
          spacing={5}
        >
          {servicesList.map((props, index) => (
            <HeroServicesListItem key={index} label={props.label} />
          ))}
        </VStack>
      </SimpleGrid>
    </Box>
  )
}
export default memo(HeroServicesList)
