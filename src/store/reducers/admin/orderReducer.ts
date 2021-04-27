import * as types from './../../actions/admin/orders/types'

type Order = {
    id: number,
    product_id: string,
    user_id: string,
    quantity: string,
    price: string,
    status: string,
}

interface StateType {
    orders: Order[];
    order: Order;
}

const initialState: StateType = {
    orders: [],
    order: {
        id: 0,
        product_id: '',
        user_id: '',
        quantity: '',
        price: '',
        status: '',
    },
}

const adminOrderReducer = (state = initialState, action: any) => {
    switch (action.type) {
        case types.FETCH_ADMIN_ORDERS:
            return {
                ...state,
                orders: action.payload
            }
        case types.FETCH_ADMIN_ORDER:
            return {
                ...state,
                order: action.payload
            }
        case types.UPDATE_ADMIN_ORDER:
            return {
                ...state,
            }
        case types.DELETE_ADMIN_ORDER:
            return {
                ...state,
                orders: state.orders.filter(item => item.id !== action.payload)
            }
        default:
            return state
    }
}

export default adminOrderReducer
