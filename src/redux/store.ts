import {applyMiddleware, createStore, Store} from "redux";
import postReducer from "./post-reducer";
import thunk from "redux-thunk";
import {persistStore, persistReducer} from "redux-persist";
import storage from "redux-persist/lib/storage";
import {PostState_I} from "./types";

const persistConfig = {
    key: "root",
    storage
}

const persistedReducer = persistReducer(persistConfig, postReducer);

const store: Store<PostState_I> = createStore(persistedReducer, applyMiddleware(thunk));
const persistor = persistStore(store);

export {store, persistor};