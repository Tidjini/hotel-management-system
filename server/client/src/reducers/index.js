import { combineReducers } from "redux";
import GuestsReducer from "./guestsReducer";

export default combineReducers({
  guests: GuestsReducer
});
