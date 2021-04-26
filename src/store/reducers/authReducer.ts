import * as types from './../actions/auth/types'

const initialState = {
    token: null,
    isAuthenticate: false,
    currentUser: null,
}

const authReducer = (state = initialState, action: any) => {
    switch (action.type) {
        case types.LOGIN:
            return {
                ...state,
            }
        default:
            return state
    }
}

export default authReducer
