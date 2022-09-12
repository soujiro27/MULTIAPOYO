import { SIGN_IN, LOADING, ERROR } from "./Types";
import { CallApiPost } from "../utils/request";

export const sign_in = (data) => async (dispatch) => {
    
    dispatch({ type: LOADING });
    
    const url = "https://reqres.in/api/login";
    const res = await CallApiPost(url,data);
   
    if(res.error){
        dispatch({
            type: ERROR,
            payload:{
                message: res.error
            }
        });
    }

    if(res.token){
        dispatch({
            type: SIGN_IN,
            payload:{
                token: res.token
           }
        });
    }
};