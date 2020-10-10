import {
    ADD_COMMENT,
    ADD_NEW_POST,
    Comment_I,
    DELETE_POST,
    FETCH_POSTS,
    Post_I,
    PostActionTypes,
    UPDATE_POST
} from "./types";
import axios, {AxiosResponse} from "axios";
import {ThunkDispatch} from "redux-thunk";

export function fetchPosts() {
    return async (dispatch: ThunkDispatch<{}, {}, PostActionTypes>) => {
        const data: AxiosResponse<Post_I[]> = await axios.get<Post_I[]>("https://bloggy-api.herokuapp.com/posts");
        data.data.forEach(item => {
            item.comments = [];
        });
        dispatch(<const>{
            type: FETCH_POSTS,
            payload: data.data
        });
    }
}

export const addComment = (post: Post_I, comment: Comment_I): PostActionTypes => (<const>{
    type: ADD_COMMENT,
    payload: {post, comment}
});

export const deletePost = (postId: number): PostActionTypes => (<const>{
    type: DELETE_POST,
    payload: postId
});

export const updatePost = (modifiedPost: Post_I): PostActionTypes => (<const>{
    type: UPDATE_POST,
    payload: modifiedPost
});

export const addNewPost = (post: Post_I): PostActionTypes => (<const>{
    type: ADD_NEW_POST,
    payload: post
});