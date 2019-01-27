//core
import { combineReducers } from "redux";

//reducers
import { galleryReducer } from "../bus/gallery/reducer";

export const rootReducer = combineReducers({
    gallery: galleryReducer,
});
