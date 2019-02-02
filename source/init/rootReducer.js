//core
import { combineReducers } from "redux";

//reducers
import { postsReducer as posts } from "../bus/posts/reducer";

export const rootReducer = combineReducers({
   posts,
});
