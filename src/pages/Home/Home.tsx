import { useMemo } from 'react'
import { BannerHero } from '../../components/BannerHero'
import { CardsProduct } from '../../components/CardsProduct'
import { CarouselHero } from '../../components/SlideProduct'
import { PlansPricing } from '../../components/PlansPricing'
import { BannerPricing } from '../../components/BannerPricing'
import { Contact } from '../../components/Contact'
import { CARDS_SLIDER } from '../../components/CardsProduct/data/[cards_props]'
import { SLIDER } from '../../components/SlideProduct/data/[slide_props]'
import SERVICES_LIST from '../../services/servicesList'
import PLANS from '../../services/plans'

export const Home = () => {
  const data = useMemo(() => {
    const response = SERVICES_LIST.map(props => {
      return {
        label: props.label,
      }
    })

    return response
  }, [])

  const plans = useMemo(() => {
    const response = PLANS.map(props => {
      return {
        plan: props.plan,
        price: props.price,
        month: props.month,
      }
    })

    return response
  }, [])

  return (
    <main>
      <header>{SLIDER && <CarouselHero slide={SLIDER} />}</header>

      <BannerHero
        title="TVBox"
        subtitle="Stream Vision"
        description="Netflix, Prime Vídeo, Disney, Globo Play, Canais Abertos e Fechados e muito mais."
        imageUrl="/images/banner.jpg"
      />

      <section>
        {CARDS_SLIDER && <CardsProduct title="Produtos" cards={CARDS_SLIDER} />}

        <BannerPricing listService={data} />

        <PlansPricing plansList={plans} />

        <Contact
          title="Entre em contato"
          content="Peça já seu serviços de streaming"
        />
      </section>
    </main>
  )
}
