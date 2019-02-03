//core
import { combineReducers } from "redux";

//reducers
import { postsReducer as posts } from "../bus/posts/reducer";
import { uiReducer as ui } from "../bus/ui/reducer";

export const rootReducer = combineReducers({
    posts,
    ui,
});
