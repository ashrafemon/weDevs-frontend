import {api_url} from "../../../../utils/constains";
import * as types from './types';
import {ProductType} from "../../../../types";
import {toggleNotification} from "../../auth/action";

export const fetchAdminProducts = () => (dispatch: Function) => {
    fetch(api_url + 'admin/products', {
        method: 'GET',
    })
        .then(res => res.json())
        .then(res => {
            console.log(res)
            if (res.status === 'done') {
                dispatch({
                    type: types.FETCH_ADMIN_PRODUCTS,
                    payload: res.products
                })
            }
        })
        .catch(err => console.log(err))
}
export const fetchAdminProduct = (id: number) => (dispatch: Function) => {
    fetch(api_url + 'admin/products/show', {
        method: 'POST',
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
                    type: types.FETCH_ADMIN_PRODUCT,
                    payload: res.product
                })
            }
        })
        .catch(err => console.log(err))
}
export const createAdminProduct = (data: any) => (dispatch: Function) => {
    fetch(api_url + 'admin/products', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    })
        .then(res => res.json())
        .then(res => {
            console.log(res)
            if (res.status === 'done') {
                dispatch(toggleNotification({
                    type: 'success',
                    text: res.message,
                    show: true
                }))
            }
        })
        .catch(err => console.log(err))
}
export const updateAdminProduct = (data: any) => (dispatch: Function) => {
    fetch(api_url + 'admin/products/edit', {
        method: 'PATCH',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    })
        .then(res => res.json())
        .then(res => {
            console.log(res)
            if (res.status === 'done') {
                dispatch(toggleNotification({
                    type: 'success',
                    text: res.message,
                    show: true
                }))
            }
        })
        .catch(err => console.log(err))
}
export const deleteAdminProduct = (id: number) => (dispatch: Function) => {
    fetch(api_url + 'admin/products/delete', {
        method: 'DELETE',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({id: id})
    })
        .then(res => res.json())
        .then(res => {
            console.log(res)
            if (res.status === 'done') {
                dispatch({type: types.DELETE_ADMIN_PRODUCT, payload: id})
                dispatch(toggleNotification({
                    type: 'success',
                    text: res.message,
                    show: true
                }))
            }
        })
        .catch(err => console.log(err))
}

export const toggleAdminDialog = (payload: boolean) => ({
    type: types.TOGGLE_ADMIN_DIALOG,
    payload: payload
})

export const setAdminProduct = (id: number) => (dispatch: Function, getState: any) => {
    const productStore = getState().adminProductStore
    let product = {}
    productStore.products.forEach((item: ProductType) => {
        if (item.id === id) return product = item
    })
    dispatch({type: types.FETCH_ADMIN_PRODUCT, payload: product})
}
