import * as types from './../actions/auth/types'

type UserType = {
    name: string,
    email: string,
    password: string,
    role: string,
    status: string
}

interface StateType {
    token: string | null;
    isAuthenticate: boolean,
    currentUser: UserType | null,
    notification: {
        type: string,
        text: string,
        show: boolean
    }
}

const initialState: StateType = {
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
                token: action.payload.token,
                isAuthenticate: action.payload.isAuthenticate,
                currentUser: action.payload.currentUser
            }
        case types.REGISTER:
            return {
                ...state,
            }
        case types.ME:
            return {
                ...state,
                token: action.payload.token,
                isAuthenticate: action.payload.isAuthenticate,
                currentUser: action.payload.currentUser
            }
        case types.LOGOUT:
            return {
                ...state,
                token: action.payload.token,
                isAuthenticate: action.payload.isAuthenticate,
                currentUser: action.payload.currentUser
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
