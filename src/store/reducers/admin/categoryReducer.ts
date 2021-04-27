import * as types from './../../actions/admin/category/types'

type CategoryType = {
    id: number,
    name: string
}

interface StateType {
    categories: CategoryType[],
    category: CategoryType
}

const initialState: StateType = {
    categories: [],
    category: {
        id: 0,
        name: ''
    }
}

const adminCategoryReducer = (state = initialState, action: any) => {
    switch (action.type) {
        case types.FETCH_ADMIN_CATEGORIES:
            return {
                ...state,
                categories: action.payload,
            }
        case types.FETCH_ADMIN_CATEGORY:
            return {
                ...state,
                category: action.payload
            }
        case types.CREATE_ADMIN_CATEGORY:
            return {
                ...state,
                category: action.payload
            }
        case types.UPDATE_ADMIN_CATEGORY:
            return {
                ...state,
                category: action.payload
            }
        case types.DELETE_ADMIN_CATEGORY:
            return {
                ...state,
                categories: state.categories.filter(item => item.id !== action.payload)
            }
        default:
            return state
    }
}

export default adminCategoryReducer
