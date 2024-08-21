import { combineReducers } from "redux";
import NewsReducer from "./reducer/NewsReducer";

export default combineReducers({
    newsInfo: NewsReducer,
})