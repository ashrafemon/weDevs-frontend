import {api_url} from "../../../../utils/constains";
import * as types from './types';
import {toggleNotification} from "../../auth/action";

export const fetchAdminCategories = () => (dispatch: Function) => {
    fetch(api_url + 'admin/categories', {
        method: 'GET',
    })
        .then(res => res.json())
        .then(res => {
            console.log(res)
            if (res.status === 'done') {
                dispatch({
                    type: types.FETCH_ADMIN_CATEGORIES,
                    payload: res.categories
                })
            }
        })
        .catch(err => console.log(err))
}
export const fetchAdminCategory = (id: number) => (dispatch: Function) => {
    fetch(api_url + 'admin/categories/show', {
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
                dispatch({type: types.FETCH_ADMIN_CATEGORY, payload: res.category})
            }
        })
        .catch(err => console.log(err))
}
export const createAdminCategory = (data: any, cb: Function = () => {
}) => (dispatch: Function) => {
    fetch(api_url + 'admin/categories', {
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
                cb()
            }
        })
        .catch(err => console.log(err))
}
export const updateAdminCategory = (data: any, cb: Function = () => {
}) => (dispatch: Function) => {
    fetch(api_url + 'admin/categories/edit', {
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
            }
        })
        .catch(err => console.log(err))
}
export const deleteAdminCategory = (id: number) => (dispatch: Function) => {
    fetch(api_url + 'admin/categories/delete', {
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
                dispatch({type: types.DELETE_ADMIN_CATEGORY, payload: id})
                dispatch(toggleNotification({
                    type: 'success',
                    text: res.message,
                    show: true
                }))
            }
        })
        .catch(err => console.log(err))
}
