import {
    PRODUCT_LIST_FAIL,
    PRODUCT_LIST_SUCCESS,
    PRODUCT_LIST_REQUEST,


    PRODUCT_DETAILS_FAIL,
    PRODUCT_DETAILS_SUCCESS,
    PRODUCT_DETAILS_REQUEST

} from '../constants/productsConstants'

export const productListReducers= (state ={ products:[]},action)=>{
    switch(action.type){
        case PRODUCT_LIST_REQUEST:
            return { loading: true, products:[]}
        
        case PRODUCT_LIST_SUCCESS:
            return {loading:false, 
                products:action.payload,
                page:action.payload.page,
                pages:action.payload.pages}

        case PRODUCT_LIST_FAIL:
            return {loading:false, error:action.payload}

        default:
            return state
    }

}


