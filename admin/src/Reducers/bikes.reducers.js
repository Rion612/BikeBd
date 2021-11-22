import { bikesConstant } from "../Actions/constants"

const initialState = {
    loading : false,
    error : '',
    bikes : []
}

export default (state = initialState,action)=>{
    switch(action.type){
        case bikesConstant.GET_ALL_BIKE_REQUEST:
            state ={
                ...state,
                loading :true
                
            }
            break;
        case bikesConstant.GET_ALL_BIKE_SUCCESS:
            state= {
                ...state,
                loading : false,
                bikes: action.payload.bikes,
                
            }
            break;
        case bikesConstant.GET_ALL_BIKE_FAILURE:
            state={
                ...state,
                error : action.payload.error
            }
            break;
    }
    return state;
}
