import {createStore,combineReducers,applyMiddleware} from 'redux'
import thunk from 'redux-thunk'
import {composeWithDevTools} from 'redux-devtools-extension'
import { productListReducers } from './reducer/productReducers'
import { cartReducer } from './reducer/cartReducers'
import { USERLoginReducers } from './reducer/userReducer'
const reducer=combineReducers({
    productList:productListReducers,
    cart:cartReducer,
    userLogin:USERLoginReducers,
})

const cartItemsFromStorage=localStorage.getItem('cartItems') ? JSON.parse(localStorage.getItem('cartItems')):[]
const initialState={
    cart:{cartItems:cartItemsFromStorage}
}
const middleware=[thunk]
const store=createStore(reducer,initialState,composeWithDevTools(applyMiddleware(...middleware)))

export default store