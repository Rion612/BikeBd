
import axios from "../helpers/axios";
import { addCategoryConstants, categoryConstants } from "./constants"

export const getCategory = ()=>{
    return async (dispatch) => {
        dispatch({type:categoryConstants.GET_CATEGORY_REQUEST});


        const res = await axios.get('/get/bike/categories');
        
        if(res.status === 200){

            const {bikeCategory} = res.data;
           
            dispatch({
                type:categoryConstants.GET_CATEGORY_SUCCESS,
                payload:{
                    bikeCategory:bikeCategory
                }
            })
        }
        else{
            if(res.status === 400){
                dispatchEvent({
                    type:categoryConstants.GET_CATEGORY_FAILURE,
                    payload:{
                        message:"Something wrong"

                    }
                    
                })
            }
        }

    }
}
/*
export const createCategory=(form)=>{
    return async dispatch =>{
        dispatch({type:addCategoryConstants.ADD_CATEGORY_REQUEST});

        const token = localStorage.getItem('token');

        const res = await axios.post('/createcategory',form,{
            headers: {
                'Authorization': `Bearer ${token}` 
              }
        });
        if(res.status === 201){
            dispatch({
                type:addCategoryConstants.ADD_CATEGORY_SUCCESS,
                payload:{
                    Category:res.data.category
                }
            })
        }
        else{
            dispatch({
                type:addCategoryConstants.ADD_CATEGORY_FAILURE,
                payload:{
                    message:"Something wrong"
                }
            })
        }
    }
}*/