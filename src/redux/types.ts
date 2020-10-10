export const FETCH_POSTS = "FETCH_POSTS";
export const DELETE_POST = "DELETE_POST";
export const UPDATE_POST = "UPDATE_POST";
export const ADD_COMMENT = "ADD_COMMENT";
export const ADD_NEW_POST = "ADD_NEW_POST";

export interface Comment_I {
    author: string,
    content: string
}

export interface Post_I {
    id: number,
    title: string,
    body: string,
    comments: Comment_I[]
}

export interface PostState_I {
    posts: Post_I[]
}

interface FetchPostsAction_I {
    type: typeof FETCH_POSTS,
    payload: Post_I[]
}

interface UpdatePostAction_I {
    type: typeof UPDATE_POST,
    payload: Post_I
}

interface DeletePostAction_I {
    type: typeof DELETE_POST,
    payload: number
}

interface AddPostAction_I {
    type: typeof ADD_NEW_POST,
    payload: Post_I
}

interface CommentsActions_I {
    type: typeof ADD_COMMENT,
    payload: { post: Post_I, comment: Comment_I }
}

export type PostActionTypes =
    FetchPostsAction_I |
    UpdatePostAction_I |
    CommentsActions_I |
    DeletePostAction_I |
    AddPostAction_I;