import {api_url} from "../../../../utils/constains";
import * as types from './types';
import {toggleNotification} from "../../auth/action";

export const fetchAdminOrders = () => (dispatch: Function) => {
    fetch(api_url + 'admin/orders', {
        method: 'GET',
    })
        .then(res => res.json())
        .then(res => {
            console.log(res)
            if (res.status === 'done') {
                dispatch({
                    type: types.FETCH_ADMIN_ORDERS,
                    payload: res.orders
                })
            }
        })
        .catch(err => console.log(err))
}
export const fetchAdminOrder = (id: number) => (dispatch: Function) => {
    fetch(api_url + 'admin/orders/show', {
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
                    type: types.FETCH_ADMIN_ORDER,
                    payload: res.order
                })
            }
        })
        .catch(err => console.log(err))
}
export const updateAdminOrder = (data: any, cb: Function = () => {
}) => (dispatch: Function) => {
    fetch(api_url + 'admin/orders/edit', {
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
                cb()
            } else if (res.status === 'error') {
                dispatch(toggleNotification({
                    type: 'error',
                    text: res.message,
                    show: true
                }))
            }
        })
        .catch(err => console.log(err))
}
export const deleteAdminOrder = (id: number) => (dispatch: Function) => {
    fetch(api_url + 'admin/orders/delete', {
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
                dispatch({type: types.DELETE_ADMIN_ORDER, payload: id})
                dispatch(toggleNotification({
                    type: 'success',
                    text: res.message,
                    show: true
                }))
            }
        })
        .catch(err => console.log(err))
}
