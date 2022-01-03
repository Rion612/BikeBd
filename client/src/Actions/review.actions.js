import axios from "../helpers/axios";
import { reviewConstant } from "./constants";

export const getAllReviews = () => {
    return async dispatch => {
        dispatch({ type: reviewConstant.GET_ALL_REVIEW_REQUEST });


        await axios.get('/get/all/reviews')
            .then((res) => {
                if (res.status === 200) {

                    dispatch({
                        type: reviewConstant.GET_ALL_REVIEW_SUCCESS,
                        payload: {
                            reviews: res.data.data
                        }
                    })
                }
                else {
                    dispatch({
                        type: reviewConstant.GET_ALL_REVIEW_FAILURE,
                        payload: {
                            message: res.data.message
                        }
                    })
                }

            })
            .catch((error) => {
                dispatch({
                    type: reviewConstant.GET_ALL_REVIEW_FAILURE,
                    payload: {
                        message: "Something is wrong!",
                        error: error
                    }
                })

            });
    }
}
