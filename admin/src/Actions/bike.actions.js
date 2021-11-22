import axios from "../helpers/axios";
import { bikesConstant } from "./constants";

export const getAllBikes = () => {
    return async dispatch => {
        dispatch({ type: bikesConstant.GET_ALL_BIKE_REQUEST });


        await axios.get('/get/all/bikes')
            .then((res) => {
                if (res.status === 200) {

                    dispatch({
                        type: bikesConstant.GET_ALL_BIKE_SUCCESS,
                        payload: {
                            bikes: res.data.bikesList
                        }
                    })
                }
                else {
                    dispatch({
                        type: bikesConstant.GET_ALL_BIKE_FAILURE,
                        payload: {
                            message: res.data.message
                        }
                    })
                }

            })
            .catch((error) => {
                dispatch({
                    type: bikesConstant.GET_ALL_BIKE_FAILURE,
                    payload: {
                        error
                    }
                })

            });
    }
}
