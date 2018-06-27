import { combineReducers } from "redux";
import { posts } from "./postReducer";
import { requestInfo } from "./requestInfoReducer";

export const rootReducer = combineReducers({
    posts,
    requestInfo
});