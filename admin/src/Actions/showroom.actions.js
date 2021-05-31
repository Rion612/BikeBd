import axios from '../helpers/axios';
import { showroomConstants} from  './constants';

export const getShowroom= ()=>{
    return async dispatch =>{
        dispatch({type : showroomConstants.GET_SHOWROOM_REQUEST});

        const res = await axios.get('/get/all/showrooms');

        if(res.status === 200){
           
            dispatch({
                type:showroomConstants.GET_SHOWROOM_SUCCESS,
                payload:{
                    showrooms:res.data.showrooms
                }
            })
        }
        else{
                dispatchEvent({
                    type:showroomConstants.GET_SHOWROOM_FAILURE,
                    payload:{
                        message:"Something wrong"

                    }
                    
                })
        }
    }
}