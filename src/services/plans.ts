import { v4 as uuidv4 } from 'uuid'

export default [
  {
    id: uuidv4(),
    plan: 'Mensal',
    price: '40.00',
    month: '1 mês',
  },
  {
    id: uuidv4(),
    plan: 'Trimestral',
    price: '90.00',
    month: '3 meses',
  },
  {
    id: uuidv4(),
    plan: 'Anual',
    price: '300.00',
    month: '12 meses',
  },
]
