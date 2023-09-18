import { memo } from 'react'
import { Box, Container, SimpleGrid } from '@chakra-ui/react'
import { PlanPricingCard } from './components/PlanPricingCard'
import { PlansHeader } from './components/PlansHeader'

interface PlansPricingProps {
  plansList: {
    id: string
    plan: string
    price: string
    month: string
  }[]
}

const PlansPricing = ({ plansList }: PlansPricingProps) => {
  return (
    <Container maxW={'8xl'}>
      <Box py={'64px'} px={'10'}>
        <PlansHeader
          title="Planos e Preços"
          description={`
            O Melhor da TV paga e streaming juntos sem travamentos
            e perda de sinal, HD, SD e FULL HD.
          `}
        />
        <Box maxW={'7xl'} py={'20'} mx={'auto'}>
          <SimpleGrid columns={[1, 3]} gap={[16, 5]}>
            {plansList.map(props => (
              <PlanPricingCard key={props.id} plans={props} />
            ))}
          </SimpleGrid>
        </Box>
      </Box>
    </Container>
  )
}

export default memo(PlansPricing)
