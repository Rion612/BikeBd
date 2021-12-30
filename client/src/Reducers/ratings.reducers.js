import { ratingConstant } from "../Actions/constants"

const initialState = {
    loading : false,
    error : '',
    ratings : []
}

export default (state = initialState,action)=>{
    switch(action.type){
        case ratingConstant.GET_ALL_RATING_REQUEST:
            state ={
                ...state,
                loading :true
                
            }
            break;
        case ratingConstant.GET_ALL_RATING_SUCCESS:
            state= {
                ...state,
                loading : false,
                ratings: action.payload.ratings,
                
            }
            break;
        case ratingConstant.GET_ALL_RATING_FAILURE:
            state={
                ...state,
                error : action.payload.message
            }
            break;
    }
    return state;
}
