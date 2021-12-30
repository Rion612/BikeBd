import axios from "../helpers/axios";
import { ratingConstant } from "./constants";

export const getAllRatings = () => {
    return async dispatch => {
        dispatch({ type: ratingConstant.GET_ALL_RATING_REQUEST });


        await axios.get('/get/all/bikes/ratings')
            .then((res) => {
                if (res.status === 200) {

                    dispatch({
                        type: ratingConstant.GET_ALL_RATING_SUCCESS,
                        payload: {
                            ratings: res.data.ratings
                        }
                    })
                }
                else {
                    dispatch({
                        type: ratingConstant.GET_ALL_RATING_FAILURE,
                        payload: {
                            message: res.data.message
                        }
                    })
                }

            })
            .catch((error) => {
                dispatch({
                    type: ratingConstant.GET_ALL_RATING_FAILURE,
                    payload: {
                        message: "Something is wrong!"
                    }
                })

            });
    }
}
