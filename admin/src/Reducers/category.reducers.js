import { categoryConstants } from "../Actions/constants"

const initial_state = {
    loading: false,
    categories: [],
    error: null

}
const buildNewCategories = (categories, category) => {
    return [
        ...categories,
        {
            _id: category._id,
            name: category.name,
            slug: category.slug,
            categoryImage: category.categoryImage
        }
    ];

}
export default (state = initial_state, action) => {
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
        case categoryConstants.ADD_CATEGORY_REQUEST:
            state = {
                ...state,
                loading: true
            }
            break;
        case categoryConstants.ADD_CATEGORY_SUCCESS:
            const cate = action.payload.Category;
            const updateCategories = buildNewCategories(state.categories, cate);
            state = {
                ...state,
                categories: updateCategories,
                loading: false

            }
            break;
        case categoryConstants.ADD_CATEGORY_FAILURE:
            state = {
                ...state,
                message: action.payload.message

            }
            break;

    }
    return state;

}