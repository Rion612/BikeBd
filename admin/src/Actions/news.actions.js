import axios from "../helpers/axios";
import { newsConstants } from "./constants";

export const getAllNews = () => {
  return async dispatch => {
      dispatch({ type: newsConstants.GET_NEWS_REQUEST });


      await axios.get('/get/all/news')
          .then((res) => {
              if (res.status === 200) {

                  dispatch({
                      type:newsConstants.GET_NEWS_SUCCESS,
                      payload: {
                          news:res.data.data
                      }
                  })
              }
              else {
                  dispatch({
                      type: newsConstants.GET_NEWS_FAILURE,
                      payload: {
                          message:res.data.message
                      }
                  })
              }

          })
          .catch((error) => {
              dispatch({
                  type: newsConstants.GET_NEWS_FAILURE,
                  payload: {
                      error,
                      message: "Something happend wrong!"
                  }
              })

          });
  }
}
