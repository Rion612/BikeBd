import { newsConstant } from "../Actions/constants";

const initState={
    error :"",
    loading : false,
    news :[]
}
export default (state = initState, action) => {
    switch (action.type) {
        case newsConstant.GET_NEWS_REQUEST:
            state = {
                ...initState,
                loading: true
            }
            break;
        case newsConstant.GET_NEWS_SUCCESS:
            state = {
                ...state,
                loading: false,
                news: action.payload.news
            }
            break;
        case newsConstant.GET_NEWS_FAILURE:
            state = {
                ...state,
                error: action.payload.message
            }
            break;
    }
    return state;
}