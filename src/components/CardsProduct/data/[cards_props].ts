import { v4 as uuidv4 } from 'uuid'
import { CardType } from '../../../@types/CardType'

export const CARDS_SLIDER: Array<CardType> = [
  {
    id: uuidv4(),
    banner: '/images/card_1.jpg',
  },
  {
    id: uuidv4(),
    banner: '/images/card_2.jpg',
  },
  {
    id: uuidv4(),
    banner: '/images/card_3.jpg',
  },
  {
    id: uuidv4(),
    banner: '/images/card_4.jpg',
  },
]
