import { brandConstants } from "../Actions/constants"

const initialState = {
    brands: [],
    error: null,
    loading: false
}
export default (state = initialState, action) => {
    switch (action.type) {
        case brandConstants.GET_BRAND_REQUEST:
            state = {
                ...initialState,
                loading: true
            }
            break;
        case brandConstants.GET_BRAND_SUCCESS:
            state={
                ...state,
                brands : action.payload.bikeBrand,
                loading : false
            }
            break;
        case brandConstants.GET_BRAND_FAILURE:
            state = {
                ...state,
                loading:false,
                error : action.payload.error
            }
            break;

    }
    return state;

}