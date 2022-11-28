import axios from 'axios'
import {
    PRODUCT_LIST_FAIL,
    PRODUCT_LIST_SUCCESS,
    PRODUCT_LIST_REQUEST

} from '../constants/productsConstants'

export const listProducts=()=> async (dispatch)=>{
    try{
        console.log("calling")
        dispatch({type:PRODUCT_LIST_REQUEST})
        const {data}= await axios.get('/api/products/')
        dispatch({
            type:PRODUCT_LIST_SUCCESS,
            payload:data
        })

    } catch(error){
        dispatch({
            type:PRODUCT_LIST_FAIL,
            payload:error.respons && error.respons.data.message ? error.respons.data.message :error.message,
        })
    } 

}