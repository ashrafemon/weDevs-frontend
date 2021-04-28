import * as types from './../actions/products/types'
import {ProductType} from "../../types";

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

const productReducer = (state = initialState, action: any) => {
    switch (action.type) {
        case types.FETCH_PRODUCTS:
            return {
                ...state,
                products: action.payload,
            }
        case types.FETCH_PRODUCT:
            return {
                ...state,
                product: action.payload
            }
        case types.TOGGLE_DIALOG:
            return {
                ...state,
                showDialog: action.payload
            }
        default:
            return state
    }
}

export default productReducer
