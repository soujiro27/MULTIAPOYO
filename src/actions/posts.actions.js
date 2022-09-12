import { GET_POSTS, POSTS_LOADING } from "./Types";
import { CallApiGet } from "../utils/request";

export const get_posts = (id) => async (dispatch) => {

    dispatch({ type: POSTS_LOADING });
    
    const url = `https://jsonplaceholder.typicode.com/users/${id}/posts`;
    const res = await CallApiGet(url);
   
    console.log("res", res);

    dispatch({
        type: GET_POSTS,
        payload:{
            posts: res
        }
    });
    
};