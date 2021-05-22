import { addCategoryConstants, categoryConstants } from "../Actions/constants"

const initial_state = {
    loading: false,
    categories: [],
    error: null

}
export default (state=initial_state, action) => {
    switch (action.type) {
        case categoryConstants.GET_CATEGORY_REQUEST:
            state = {
                ...initial_state,
                loading: true
            }
            break;
        case categoryConstants.GET_CATEGORY_SUCCESS:
            state = {
                ...state,
                categories: action.payload.bikeCategory,
                loading: false
            }
            break;
        case categoryConstants.GET_CATEGORY_FAILURE:
            state = {
                ...initial_state,
                loading: false,
                message: action.payload.message
            }
            break;
            /*
        case addCategoryConstants.ADD_CATEGORY_REQUEST:
            state = {
                ...state,
                loading:true
            }
            break;
        case addCategoryConstants.ADD_CATEGORY_SUCCESS:
            const cate = action.payload.Category;
            const updateCategories = buildNewCategories(cate.parentId,state.categories,cate);
            state = {
                ...state,
                categories:updateCategories,
                loading: false

            }
            break;
        case addCategoryConstants.ADD_CATEGORY_FAILURE:
            state = {
                ...initial_state,
                message: action.payload.message

            }
            break;*/

    }
    return state;

}