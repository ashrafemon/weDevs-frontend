import {applyMiddleware, compose, createStore} from 'redux'
import thunk from 'redux-thunk'
import {createLogger} from 'redux-logger'
import rootReducer from './reducers/rootReducer'

// const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose
const composeEnhancers = compose

const middleWare = []
middleWare.push(thunk)

const loggerMiddleware = createLogger({
    predicate: () => process.env.NODE_ENV === 'development',
})

middleWare.push(loggerMiddleware)

const store = createStore(
    rootReducer,
    composeEnhancers(applyMiddleware(...middleWare))
)

export default store
