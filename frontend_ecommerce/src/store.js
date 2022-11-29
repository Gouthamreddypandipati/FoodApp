import {createStore,combineReducers,applyMiddleware} from 'redux'
import thunk from 'redux-thunk'
import {composeWithDevTools} from 'redux-devtools-extension'
import { productListReducers } from './reducer/productReducers'
import { cartReducer } from './reducer/cartReducers'
import { USERLoginReducers, userRegisterReducer } from './reducer/userReducer'


const reducer=combineReducers({
    productList:productListReducers,
    cart:cartReducer,
    userLogin:USERLoginReducers,
    userRegister:userRegisterReducer,
})

const cartItemsFromStorage=localStorage.getItem('cartItems') ? JSON.parse(localStorage.getItem('cartItems')):[]

const userInfoFromStorage=localStorage.getItem('userInfo') ? JSON.parse(localStorage.getItem('userInfo')):null

const initialState={
    cart:{cartItems:cartItemsFromStorage},
    userLogin:{userInfo:userInfoFromStorage}
}
const middleware=[thunk]
const store=createStore(reducer,initialState,composeWithDevTools(applyMiddleware(...middleware)))

export default store