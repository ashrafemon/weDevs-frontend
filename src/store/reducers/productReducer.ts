import * as types from './../actions/products/types'

type Product = {
    id: number,
    name: string,
    sku: string,
    category: string,
    price: string,
    image: string
}

interface StateType {
    products: Product[],
    product: Product
}

const initialState: StateType = {
    products: [
        {
            id: 1,
            name: 'Tomato',
            sku: 'SKUKJDFKFD',
            category: 'Fruits',
            price: '100',
            image: ''
        },
        {
            id: 1,
            name: 'Apple',
            sku: 'SKUKJDFKFD',
            category: 'Fruits',
            price: '120',
            image: ''
        }
    ],
    product: {
        id: 0,
        name: '',
        sku: '',
        category: '',
        price: '',
        image: ''
    },
}

const productReducer = (state = initialState, action: any) => {
    switch (action.type) {
        case types.FETCH_PRODUCTS:
            return {
                ...state,
                products: action.payload
            }
        case types.FETCH_PRODUCT:
            return {
                ...state,
                product: action.payload
            }
        case types.DELETE_PRODUCT:
            return {
                ...state,
                // products: state.products.filter(item => item.id !== action.payload)
            }
        default:
            return state
    }
}

export default productReducer
