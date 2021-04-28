import * as types from './types'
import {api_url} from "../../../utils/constains";

export const login = (data: any, router: any) => (dispatch: Function) => {
    fetch(api_url + 'auth/login', {
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
                localStorage.setItem('token', res.token)
                dispatch({
                    type: types.LOGIN,
                    payload: {
                        isAuthenticate: true,
                        currentUser: res.user,
                        token: res.token
                    }
                })
                dispatch(toggleNotification({
                    type: 'success',
                    text: res.message,
                    show: true
                }))
                if (res.user.role === 'user') {
                    router.replace('/')
                } else if (res.user.role === 'admin') {
                    router.replace('/admin/products')
                }
            } else if (res.status === 'error') {
                dispatch(toggleNotification({
                    type: 'error',
                    text: res.message,
                    show: true
                }))
            }
        })
}

export const register = (data: any, router: any) => (dispatch: Function) => {
    fetch(api_url + 'auth/register', {
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
                router.replace('/login')
            }
        })
        .catch(err => console.log(err))
}

export const me = (cb: Function = () => {
}) => (dispatch: Function, getStore: any) => {
    const authStore = getStore().authStore
    const token = authStore.token || localStorage.getItem('token')

    if (token) {
        fetch(api_url + 'auth/me', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': token
            },
        })
            .then(res => res.json())
            .then(res => {
                console.log(res)
                if (res.status === 'done') {
                    if (res.user && Object.keys(res.user).length) {
                        dispatch({
                            type: types.ME, payload: {
                                isAuthenticate: true,
                                token: token,
                                currentUser: res.user
                            }
                        })
                    }
                }
            })
            .catch(err => console.log(err))
    }
    cb()
}
export const logout = (cb: Function = () => {
}) => (dispatch: Function) => {
    localStorage.removeItem('token');
    dispatch({
        type: types.LOGOUT,
        payload: {
            isAuthenticate: false,
            token: null,
            currentUser: null
        }
    })
    cb()
}

export const toggleNotification = (payload: any) => ({
    type: types.TOGGLE_NOTIFICATION,
    payload: payload
})
