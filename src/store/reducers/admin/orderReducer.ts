import * as types from './../../actions/admin/orders/types'
import {OrderStateType} from "../../../types";

const initialState: OrderStateType = {
    orders: [],
    order: {
        id: 0,
        product_id: '',
        product_name: '',
        user_id: '',
        user_name: '',
        user_email: '',
        shipping_address: '',
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
