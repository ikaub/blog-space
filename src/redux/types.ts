export const FETCH_POSTS = "FETCH_POSTS";
export const DELETE_POST = "DELETE_POST";

export interface Post_I {
    id: number,
    title: string,
    body: string
}

export interface PostState_I {
    posts: Post_I[]
}

interface FetchPostsAction_I {
    type: typeof FETCH_POSTS,
    payload: Post_I[]
}

interface DeletePostAction_I {
    type: typeof DELETE_POST,
    payload: Post_I
}

export type PostActionTypes = FetchPostsAction_I | DeletePostAction_I;