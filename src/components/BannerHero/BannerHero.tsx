import { memo } from 'react'
import { Box, Icon, Image, chakra } from '@chakra-ui/react'

interface BannerHeroProps {
  title: string
  subtitle: string
  description: string
  imageUrl: string
}

const BannerHero = (props: BannerHeroProps) => {
  const { title, subtitle, description, imageUrl } = props

  return (
    <Box pos={'relative'} overflow={'hidden'} bg={'gray.800'}>
      <Box maxW={'7xl'} mx={'auto'}>
        <Box
          pos={'relative'}
          pb={{ base: 8, sm: 16, md: 20, lg: 28, xl: 32 }}
          maxW={{ lg: '2xl' }}
          w={{ lg: 'full' }}
          zIndex={1}
          bg={'gray.800'}
          border={'solid 1px transparent'}
        >
          <Icon
            display={{ base: 'none', lg: 'block' }}
            position={'absolute'}
            right={0}
            top={0}
            bottom={0}
            h={'full'}
            w={48}
            color={'gray.800'}
            transform={'translateX(50%)'}
            fill={'currentColor'}
            viewBox={'0 0 100 100'}
            preserveAspectRatio={'none'}
            aria-hidden={'true'}
          >
            <polygon points="50,0 100,0 50,100 0,100" />
          </Icon>
          <Box
            mx={'auto'}
            maxW={{ base: '7xl' }}
            px={{ base: 4, sm: 6, lg: 8 }}
            mt={{ base: 10, sm: 12, md: 16, lg: 20, xl: 28 }}
          >
            <Box
              w={'full'}
              textAlign={{ sm: 'center', lg: 'left' }}
              justifyContent={'center'}
              alignItems={'center'}
            >
              <chakra.h1
                fontSize={{ base: '4xl', sm: '5xl', md: '6xl' }}
                letterSpacing={'tight'}
                lineHeight={'short'}
                fontWeight={'extrabold'}
                color={'zinc.800'}
              >
                <chakra.span
                  display={{ base: 'block', xl: 'inline' }}
                  color={'zinc.200'}
                >
                  {title}{' '}
                </chakra.span>
                <chakra.span
                  display={{ base: 'block', xl: 'inline' }}
                  color={'indigo.500'}
                >
                  {subtitle}
                </chakra.span>
              </chakra.h1>
              <chakra.p
                mt={{ base: 3, sm: 5, md: 5 }}
                fontSize={{ sm: 'lg', md: 'xl' }}
                maxW={{ sm: 'xl' }}
                mx={{ sm: 'auto', lg: 0 }}
                color={'gray.500'}
              >
                {description}
              </chakra.p>
            </Box>
          </Box>
        </Box>
      </Box>
      <Box
        position={{ lg: 'absolute' }}
        top={{ lg: 0 }}
        bottom={{ lg: 0 }}
        right={{ lg: 0 }}
        w={{ lg: '50%' }}
        border={'solid 1px transparent'}
      >
        <Image
          h={[56, 72, 96, 'full']}
          w={'full'}
          fit={'cover'}
          src={imageUrl}
          alt={title}
          loading={'lazy'}
        />
      </Box>
    </Box>
  )
}

export default memo(BannerHero)
