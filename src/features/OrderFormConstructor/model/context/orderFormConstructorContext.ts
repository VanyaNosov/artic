import { createContext } from 'react'
import { OrderFormConstructorState } from '../../ui/OrderFormConstructor/OrderFormConstructor.tsx'

interface OrderFormConstructorContextSchema extends OrderFormConstructorState {
    handleState?: (state: OrderFormConstructorState) => void
}
export const OrderFormConstructorContext =
    createContext<OrderFormConstructorContextSchema>({})
