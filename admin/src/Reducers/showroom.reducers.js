import { showroomConstants } from "../Actions/constants"

const initialState ={
    showrooms : [],
    loading : false,
    error :""
}
const makeUpadted = (showrooms,showroom)=>{
    showrooms.push({
        _id: showroom._id,
        name: showroom.name,
        address : showroom.address,
        district: showroom.district,
        thana: showroom.thana,
        createdAt: showroom.createdAt,
        updatedAt: showroom.updatedAt,
        brand: showroom.brand
    });
    return showrooms;
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
        case showroomConstants.ADD_SHOWROOM_REQUEST:
            state ={
                ...state,
                loading :true,
            }
            break;
        case showroomConstants.ADD_SHOWROOM_SUCCESS:
            const currentShowroom = action.payload.showrooms;
            console.log(currentShowroom);
            const upgradeShowroom = makeUpadted(state.showrooms,currentShowroom);
            console.log(upgradeShowroom);
            state ={
                ...state,
                loading :false,
                showrooms : upgradeShowroom
            }
            break;
        case showroomConstants.ADD_SHOWROOM_FAILURE:
            state ={
                ...state,
                error : action.payload.message
            }
        
    }
    return state;
}