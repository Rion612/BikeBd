import axios from "../helpers/axios";
import { helmetConstants } from "./constants"

export const getAllhelmet = ()=>{
    return async dispatch=>{


        dispatch({type : helmetConstants.GET_HELMET_REQUEST});

        await axios.get('/get/all/helmets')
            .then((res) => {
                if (res.status === 200) {

                    dispatch({
                        type:helmetConstants.GET_HELMET_SUCCESS,
                        payload:{
                            helmets:res.data.helmets
                        }
                    })
                }
                else {
                    dispatch({
                        type:helmetConstants.GET_HELMET_FAILURE,
                        payload:{
                            message:res.data.message
                        }
                    })
                }

            })
            .catch((error) => {
                dispatch({
                    type:helmetConstants.GET_HELMET_FAILURE,
                    payload:{
                        error,
                        message :"Something happend wrong!"
                    }
                })

            });


        
    }
}
export const createhelmet = (form)=>{
    return async dispatch=>{


        dispatch({type : helmetConstants.ADD_HELMET_REQUEST});

        await axios.post('/create/helmet',form)
            .then((res) => {
                if (res.status === 201) {

                    dispatch({
                        type:helmetConstants.ADD_HELMET_SUCCESS,
                        payload:{
                            helmet:res.data._helmet
                        }
                    })
                }
                else {
                    dispatch({
                        type:helmetConstants.ADD_HELMET_FAILURE,
                        payload:{
                            message:res.data.message
                        }
                    })
                }

            })
            .catch((error) => {
                dispatch({
                    type:helmetConstants.ADD_HELMET_FAILURE,
                    payload:{
                        error,
                        message :"Something happend wrong!"
                    }
                })

            });


        
    }
}