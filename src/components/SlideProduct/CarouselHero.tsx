import { Center } from '@chakra-ui/react'
import { Slide, SliderCarousel, SliderProps } from '../Slider'
import { SlideType } from '../../@types/SlideType'
import { CarouselHeroItem } from './CarouselHeroItem'

interface CarouselHeroProps {
  slide: SlideType[]
}

export const CarouselHero = ({ slide }: CarouselHeroProps) => {
  const settings: SliderProps = {
    spaceBetween: 30,
    slidesPerView: 1,
    grabCursor: true,
    effect: 'creative',
    creativeEffect: {
      prev: {
        shadow: true,
        translate: [0, 0, -400],
      },
      next: {
        translate: ['100%', 0, 0],
      },
    },
    autoplay: {
      delay: 2000,
    },
    draggable: true,
    navigation: true,
    loop: true,
    pagination: {
      dynamicBullets: true,
    },
  }

  if (slide.length === 1) {
    return (
      <Center>
        <CarouselHeroItem cards={slide[0]} />
      </Center>
    )
  }

  return (
    <SliderCarousel settings={settings}>
      {slide.map(props => (
        <Slide key={props.id}>
          <CarouselHeroItem cards={props} />
        </Slide>
      ))}
    </SliderCarousel>
  )
}
