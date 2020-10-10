import {
    ADD_COMMENT,
    ADD_NEW_POST,
    Comment_I,
    DELETE_POST,
    FETCH_POSTS,
    Post_I,
    PostActionTypes,
    PostState_I,
    UPDATE_POST
} from "./types";

const initialState: PostState_I = {
    posts: []
}

function postReducer(state: PostState_I = initialState, action: PostActionTypes): PostState_I {
    switch (action.type) {
        case FETCH_POSTS:
            return {
                ...state,
                posts: action.payload
            };
        case UPDATE_POST:
            const modifiedPost: Post_I = action.payload;
            return {
                ...state,
                posts: state.posts.map(post => post.id === modifiedPost.id ? modifiedPost : post)
            };
        case DELETE_POST:
            const postToDelete: Post_I = action.payload;
            return {
                ...state,
                posts: state.posts.filter(post => post.id !== postToDelete.id)
            };
        case ADD_COMMENT:
            const {post, comment}: { post: Post_I, comment: Comment_I } = action.payload;
            return {
                ...state,
                posts: state.posts.map(item => {
                    if (item.id === post.id)
                        item.comments.push(comment);
                    return item;
                })
            };
        case ADD_NEW_POST:
            const newPost: Post_I = action.payload;
            newPost.id = state.posts[state.posts.length - 1].id + 1;
            newPost.comments = [];
            return {
                ...state,
                posts: [...state.posts, newPost]
            }
        default:
            return state;
    }
}

export default postReducer;