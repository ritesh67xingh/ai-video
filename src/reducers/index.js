import { combineReducers } from "redux";
import video from "./video";

const rootReducer = combineReducers({
  video: video,
});

export default rootReducer;
