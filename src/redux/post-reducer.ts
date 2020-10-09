import {FETCH_POSTS, PostActionTypes, PostState_I} from "./types";

const initialState: PostState_I = {
    posts: []
}

function postReducer(state: PostState_I = initialState, action: PostActionTypes): PostState_I {
    switch (action.type) {
        case FETCH_POSTS:
            return {
                posts: action.payload
            };
        default:
            return state;
    }
}

export default postReducer;