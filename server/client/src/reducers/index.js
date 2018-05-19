import { combineReducers } from "redux";
import GuestsReducer from "./guestsReducer";
import AddGuest from "./addGuest";

export default combineReducers({
  guests: GuestsReducer,
  newGuest: AddGuest
});
