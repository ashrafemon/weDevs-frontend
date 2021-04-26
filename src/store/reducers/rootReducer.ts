import {combineReducers} from "redux"
import authReducer from "./authReducer"
import productReducer from "./productReducer";
import orderReducer from "./orderReducer";


const rootReducers = combineReducers({
    authStore: authReducer,
    productStore: productReducer,
    orderStore: orderReducer
})

export default rootReducers
