import { GET_USERS, USERS_LOADING, USER_INFO } from "./Types";
import { CallApiGet } from "../utils/request";

export const get_users = () => async (dispatch) => {
    
    dispatch({ type: USERS_LOADING });
    
    const url = "https://reqres.in/api/users?page=1";
    const res = await CallApiGet(url);
   
    if(res.data){
        dispatch({
            type: GET_USERS,
            payload:{
                users: res.data
           }
        });
    }
};

export const get_user_info = (userId) => async (dispatch) => {
  

    dispatch({ type: USERS_LOADING });

    const url = `https://reqres.in/api/users/${userId}`;
    const res = await CallApiGet(url);

 
    if(res.data){
        dispatch({
            type: USER_INFO,
            payload:{
                userInfo: res.data
           }
        });
    }


};