import * as types from './../actions/auth/types'

const initialState = {
    token: null,
    isAuthenticate: false,
    currentUser: null,
    notification: {
        type: '',
        text: '',
        show: false
    }
}

const authReducer = (state = initialState, action: any) => {
    switch (action.type) {
        case types.LOGIN:
            return {
                ...state,
            }
        case types.TOGGLE_NOTIFICATION:
            return {
                ...state,
                notification: action.payload
            }
        default:
            return state
    }
}

export default authReducer
