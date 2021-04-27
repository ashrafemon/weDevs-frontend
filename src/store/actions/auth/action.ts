import * as types from './types'

export const dispatchLogin = (payload: any) => ({
    type: types.LOGIN,
    payload
})

export const toggleNotification = (payload: any) => ({
    type: types.TOGGLE_NOTIFICATION,
    payload: payload
})
