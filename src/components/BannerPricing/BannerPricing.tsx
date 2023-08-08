import { memo } from 'react'
import { Box, Flex } from '@chakra-ui/react'
import { BannerPricingHeader } from './components/BannerPricingHeader'
import { BannerPricingLeft } from './components/BannerPricingLeft'
import { BannerPricingRight } from './components/BannerPricingRight'

interface BannerPricingProps {
  listService: {
    label: string
  }[]
}

const BannerPricing = ({ listService }: BannerPricingProps) => {
  const topBg = 'zinc.200'
  const bottomBg = 'gray.900'

  return (
    <Flex boxSize={'full'} p={10} align={'center'} justify={'center'}>
      <Box
        mx={'auto'}
        textAlign={{ base: 'left', md: 'center' }}
        rounded={'md'}
        shadow={'base'}
        w={'full'}
        bg={bottomBg}
      >
        <Box pt={20} rounded="md" bg={topBg}>
          <BannerPricingHeader
            title="StreamVision Plano Box"
            description={`Disponível em varias plataforma incluindo SmartTV`}
          />
          <Box bgGradient={`linear(to-b, ${topBg} 50%, ${bottomBg} 50%)`}>
            <Flex
              rounded={'md'}
              mx={10}
              bg={bottomBg}
              shadow={'xl'}
              mb={'100px'}
              textAlign={'left'}
              direction={{ base: 'column', lg: 'row' }}
            >
              <BannerPricingLeft
                title="Plano Box"
                description={`
                  R$ 100,00 reais de instalação e mensalidades de R$ 50,00 reais
                `}
                label="Incluso na Box"
                listService={listService}
              />
              <BannerPricingRight banner="/images/banner__hero_2.jpg" />
            </Flex>
          </Box>
        </Box>
      </Box>
    </Flex>
  )
}

export default memo(BannerPricing)
