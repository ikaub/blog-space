import {FETCH_POSTS, Post_I, PostActionTypes} from "./types";
import axios, {AxiosResponse} from "axios";
import {ThunkDispatch} from "redux-thunk";

export const fetchPosts = () => {
    return async (dispatch: ThunkDispatch<{}, {}, PostActionTypes>) => {
       const data: AxiosResponse<Post_I[]> = await axios.get<Post_I[]>("https://bloggy-api.herokuapp.com/posts");
       dispatch({
           type: FETCH_POSTS,
           payload: data.data
       });
    }
}