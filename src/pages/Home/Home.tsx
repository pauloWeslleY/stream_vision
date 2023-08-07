import { BannerHero } from '../../components/BannerHero'
import { CardsProduct } from '../../components/CardsProduct'
import { CARDS_SLIDER } from '../../components/CardsProduct/data/[cards_props]'
import { CarouselHero } from '../../components/SlideProduct/CarouselHero'
import { SLIDER } from '../../components/SlideProduct/data/[slide_props]'

export const Home = () => {
  return (
    <main>
      <header>{SLIDER && <CarouselHero slide={SLIDER} />}</header>

      <BannerHero
        title="TVBox"
        subtitle="Stream Vision"
        description="The project board is an exclusive resource for contract work.
        It's perfect for freelancers, agencies, and moonlighters."
        imageUrl="/images/banner.jpg"
      />

      <section>
        {CARDS_SLIDER && <CardsProduct title="Produtos" cards={CARDS_SLIDER} />}
      </section>
    </main>
  )
}
