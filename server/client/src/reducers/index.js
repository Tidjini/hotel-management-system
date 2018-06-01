import { combineReducers } from "redux";
import GuestsReducer from "./guestsReducer";
import AddGuest from "./addGuest";
import deleteReducer from "./deleteReducer";
import chambreReducer from "./chambreReducer";
import tabReducer from "./tabReducer";

export default combineReducers({
  guests: GuestsReducer,
  newGuest: AddGuest,
  guestDeleted: deleteReducer,
  chambresData: chambreReducer,
  tabsObject: tabReducer
});
