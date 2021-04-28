import * as types from './../../actions/admin/products/types'
import {ProductType} from "../../../types";

interface StateType {
    products: ProductType[];
    product: ProductType;
    showDialog: boolean;
}

const initialState: StateType = {
    products: [],
    product: {
        id: 0,
        name: '',
        sku: '',
        category_id: '',
        category_name: '',
        price: '',
        image: ''
    },
    showDialog: false
}

const adminProductReducer = (state = initialState, action: any) => {
    switch (action.type) {
        case types.FETCH_ADMIN_PRODUCTS:
            return {
                ...state,
                products: action.payload,
            }
        case types.FETCH_ADMIN_PRODUCT:
            return {
                ...state,
                product: action.payload
            }
        case types.CREATE_ADMIN_PRODUCT:
            return {
                ...state,

            }
        case types.UPDATE_ADMIN_PRODUCT:
            return {
                ...state,

            }
        case types.DELETE_ADMIN_PRODUCT:
            return {
                ...state,
                products: state.products.filter(item => item.id !== action.payload)
            }
        case types.TOGGLE_ADMIN_DIALOG:
            return {
                ...state,
                showDialog: action.payload
            }
        default:
            return state
    }
}

export default adminProductReducer
