import {applyMiddleware, createStore} from "redux";
import postReducer from "./post-reducer";
import thunk from "redux-thunk";

const store = createStore(postReducer, applyMiddleware(thunk));

export default store;