import {combineReducers} from "redux"
import authReducer from "./authReducer"
import productReducer from "./productReducer";
import orderReducer from "./orderReducer";
import adminProductReducer from "./admin/productReducer";
import adminOrderReducer from "./admin/orderReducer";
import adminCategoryReducer from "./admin/categoryReducer";


const rootReducers = combineReducers({
    authStore: authReducer,
    productStore: productReducer,
    orderStore: orderReducer,
    adminProductStore: adminProductReducer,
    adminOrderStore: adminOrderReducer,
    adminCategoryStore: adminCategoryReducer
})

export default rootReducers
