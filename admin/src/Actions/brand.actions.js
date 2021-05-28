import axios from "../helpers/axios";
import { brandConstants } from "./constants"

export const getBrands = ()=>{
    return async dispatch=>{
        dispatch({type:brandConstants.GET_BRAND_REQUEST});


        const res = await axios.get('/get/bike/brands');

        if(res.status === 200){
            dispatch({
                type:brandConstants.GET_BRAND_SUCCESS,
                payload :{
                    bikeBrand : res.data.bikeBrand
                }
            })
        }
        else{
            dispatch({
                type:brandConstants.GET_BRAND_FAILURE,
                payload:{
                    error : res.data.error,
                    message :"Somethinf wrong"
                }
            })
        }
    }
}