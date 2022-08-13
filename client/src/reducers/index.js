import { combineReducers } from "redux";
import posts from "./posts";
import auth from "./auth";
export default combineReducers({
  // key:Value, if key and value are same than jsut write key
  posts,
  auth,
});
