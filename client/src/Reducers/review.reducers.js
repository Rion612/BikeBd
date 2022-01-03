import { reviewConstant } from "../Actions/constants"

const initialState = {
    loading : false,
    error : '',
    reviews : []
}

export default (state = initialState,action)=>{
    switch(action.type){
        case reviewConstant.GET_ALL_REVIEW_REQUEST:
            state ={
                ...state,
                loading :true
                
            }
            break;
        case reviewConstant.GET_ALL_REVIEW_SUCCESS:
            state= {
                ...state,
                loading : false,
                reviews: action.payload.reviews,
                
            }
            break;
        case reviewConstant.GET_ALL_REVIEW_FAILURE:
            state={
                ...state,
                error : action.payload.message
            }
            break;
    }
    return state;
}
