type Order = {
    id: number,
    user_id: string,
    user_name: string,
    user_email: string,
    product_id: string,
    product_name: string,
    quantity: string,
    price: string
}

interface StateType {
    orders: Order[];
    order: Order;
}

const initialState: StateType = {
    orders: [],
    order: {
        id: 0,
        user_id: '',
        user_name: '',
        user_email: '',
        product_id: '',
        product_name: '',
        quantity: '',
        price: ''
    },
}

const orderReducer = (state = initialState, action: any) => {
    switch (action.type) {
        default:
            return state
    }
}

export default orderReducer
