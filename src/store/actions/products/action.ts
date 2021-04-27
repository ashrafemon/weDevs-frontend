import {api_url} from "../../../utils/constains";
import * as types from './types'
import {ProductType} from "../../../types";

export const fetchProducts = () => (dispatch: Function) => {
    fetch(api_url + 'products', {
        method: 'GET',
    })
        .then(res => res.json())
        .then(res => {
            console.log(res)
            if (res.status === 'done') {
                dispatch({
                    type: types.FETCH_PRODUCTS,
                    payload: res.products
                })
            }
        })
        .catch(err => console.log(err))
}
export const fetchProduct = (id: number) => (dispatch: Function) => {
    fetch(api_url + 'products/show', {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({id: id})
    })
        .then(res => res.json())
        .then(res => {
            console.log(res)
            if (res.status === 'done') {
                dispatch({
                    type: types.FETCH_PRODUCT,
                    payload: res.product
                })
            }
        })
        .catch(err => console.log(err))
}

export const toggleDialog = (payload: boolean) => ({
    type: types.TOGGLE_DIALOG,
    payload: payload
})

export const setProduct = (id: number) => (dispatch: Function, getState: any) => {
    const productStore = getState().productStore
    let product = {}
    productStore.products.forEach((item: ProductType) => {
        if (item.id === id) return product = item
    })
    dispatch({type: types.FETCH_PRODUCT, payload: product})
}
