import * as types from './../actions/orders/types'

type Order = {
    id: number,
    name: string,
    sku: string,
    category: string,
    price: string,
    image: string,
    user: string,
    status: string
}

interface StateType {
    orders: Order[],
    order: Order
}

const initialState: StateType = {
    orders: [],
    order: {
        id: 1,
        name: '',
        sku: '',
        category: '',
        price: '',
        image: '',
        user: '',
        status: ''
    },
}

const orderReducer = (state = initialState, action: any) => {
    switch (action.type) {
        case types.FETCH_ORDERS:
            return {
                ...state,
                orders: action.payload
            }
        case types.FETCH_ORDER:
            return {
                ...state,
                order: action.payload
            }
        case types.DELETE_ORDER:
            return {
                ...state,
            }
        default:
            return state
    }
}

export default orderReducer
