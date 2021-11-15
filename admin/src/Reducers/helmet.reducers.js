import { helmetConstants } from "../Actions/constants"

const initState={
    error :"",
    loading : false,
    helmets :[]
}

const makeUpdate=(hetmets,h)=>{

}

export default (state = initState,action)=>{
    switch(action.type){
        case helmetConstants.GET_HELMET_REQUEST:
            state={
                ...initState,
                loadingL:true
            }
            break;
        case helmetConstants.GET_HELMET_SUCCESS:
            state={
                ...state,
                loading:false,
                helmets : action.payload.helmets
            }
            break;
        case helmetConstants.GET_HELMET_FAILURE:
            state={
                ...state,
                error : action.payload.message
            }
            break;
        case helmetConstants.ADD_HELMET_REQUEST:
            state={
                ...state,
                loading:true
            }
            break;
        case helmetConstants.ADD_HELMET_SUCCESS:
            const Helmet = action.payload.helmet;
            const updateHelmets = makeUpdate(state.helmets,Helmet)
            state={
                ...state,
                helmets : updateHelmets,
                loading:false
            }
            break;
        case helmetConstants.ADD_HELMET_FAILURE:
            state={
                ...state,
                error : action.payload.message
            }
            break;
    }
    return state;

}