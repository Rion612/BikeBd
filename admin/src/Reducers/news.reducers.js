import { newsConstants } from "../Actions/constants"

const initialState = {
    loading : false,
    error : '',
    news : []
}

export default (state = initialState,action)=>{
    switch(action.type){
        case newsConstants.GET_NEWS_REQUEST:
            state ={
                ...state,
                loading :true
                
            }
            break;
        case newsConstants.GET_NEWS_SUCCESS:
            state= {
                ...state,
                loading : false,
                news: action.payload.news,
                
            }
            break;
        case newsConstants.GET_NEWS_FAILURE:
            state={
                ...state,
                error : action.payload.message
            }
            break;
    }
    return state;
}
