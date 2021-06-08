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
                    showrooms:res.data._showrooms
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
export const createShowroom = (form)=>{
    return async dispatch =>{
        dispatch({ type : showroomConstants.ADD_SHOWROOM_REQUEST});


        await axios.post('/create/showroom',form)
            .then((res) => {
                if (res.status === 201) {

                    dispatch({
                        type:showroomConstants.ADD_SHOWROOM_SUCCESS,
                        payload:{
                            showrooms:res.data._showrooms
                        }
                    })
                }
                else {
                    dispatch({
                        type:showroomConstants.ADD_SHOWROOM_FAILURE,
                        payload:{
                            message:res.data.message
                        }
                    })
                }

            })
            .catch((error) => {
                dispatch({
                    type:showroomConstants.ADD_SHOWROOM_FAILURE,
                    payload:{
                        error,
                        message :"Something happend wrong!"
                    }
                })

            });
    }
}