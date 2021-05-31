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

export const editBrand = (form)=>{
    return async dispatch =>{
        dispatch({ type : brandConstants.EDIT_BRAND_REQUEST});


        const res = await axios.post('/edit/bike/brand',form);
        if(res.status === 200){
            dispatch({
                type:brandConstants.EDIT_BRAND_SUCCESS,
                payload:{
                    brand:res.data.bikebarnd,
                }
            })
        }
        else{
            dispatch({
                type:brandConstants.EDIT_BRAND_FAILURE,
                payload:{
                    message:"Something wrong"
                }
            })
        }
    }
}
export const deleteBrand=(item)=>{
    return async dispatch =>{
        dispatch({type: brandConstants.DEL_BRAND_REQUEST});

        const res = await axios.post('/delete/bike/brand',item);
        if(res.status === 200){
            dispatch({
                type:brandConstants.DEL_BRAND_SUCCESS,
                payload:{
                    message:res.data.message,
                    id : item._id
                }
            })
        }
        else{
            dispatch({
                type:brandConstants.DEL_BRAND_FAILURE,
                payload:{
                    message:"Something wrong"
                }
            })
        }
    }
}

export const createBrand=(form)=>{
    return async dispatch =>{
        dispatch({type: brandConstants.ADD_BRAND_REQUEST});

        const res = await axios.post('/create/bike/brand',form);
        if(res.status === 201){
            dispatch({
                type:brandConstants.ADD_BRAND_SUCCESS,
                payload:{
                    bikeBrand:res.data.bikeBrand
                }
            })
        }
        else{
            dispatch({
                type:brandConstants.ADD_BRAND_FAILURE,
                payload:{
                    message:"Something wrong"
                }
            })
        }
    }
}