import { ReactNode } from 'react'
import { Swiper, SwiperProps } from 'swiper/react'
import {
  Navigation,
  Pagination,
  A11y,
  Autoplay,
  FreeMode,
  EffectFade,
  EffectCards,
  EffectCreative,
  Keyboard,
} from 'swiper/modules'

import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import 'swiper/css/autoplay'
import 'swiper/css/free-mode'
import 'swiper/css/effect-fade'
import 'swiper/css/effect-cards'
import 'swiper/css/effect-creative'
import './slider.css'

interface SliderProps {
  settings: SwiperProps
  children: ReactNode
  css?: any
}

export function SliderCarousel({ settings, children, css }: SliderProps) {
  return (
    <Swiper
      style={css}
      modules={[
        Navigation,
        Pagination,
        A11y,
        Autoplay,
        FreeMode,
        EffectFade,
        EffectCards,
        EffectCreative,
        Keyboard,
      ]}
      {...settings}
    >
      {children}
    </Swiper>
  )
}
