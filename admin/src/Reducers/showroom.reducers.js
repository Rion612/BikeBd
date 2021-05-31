import { showroomConstants } from "../Actions/constants"

const initialState ={
    showrooms : [],
    loading : false,
    error :""
}

export default (state= initialState,action)=>{
    switch(action.type){
        case showroomConstants.GET_SHOWROOM_REQUEST:
            state ={
                ...initialState,
                loading:true
            }
            break;
        case showroomConstants.GET_SHOWROOM_SUCCESS:
            state ={
                ...state,
                loading :false,
                showrooms : action.payload.showrooms
            }
            break;
        case showroomConstants.GET_SHOWROOM_FAILURE:
            state ={
                ...state,
                error : action.payload.message
            }
            break;
        
    }
    return state;
}