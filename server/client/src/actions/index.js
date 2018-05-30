import { FETCH_GUESTS, SAVE_GUEST, DELETE_GUEST, UPDATE_GUEST } from "./types";
//import Axios from "axios";

export const fetchGuests = () => async (dispatch, getState, api) => {
  const res = await api.get("/guests");
  dispatch({
    type: FETCH_GUESTS,
    payload: res
  });
};

export const addGuest = guest => async (dispatch, getState, api) => {
  console.log(api);
  const res = await api.post("/guests", guest);

  dispatch({
    type: SAVE_GUEST,
    payload: res
  });
};

export const deleteGuest = guestId => async (dispatch, getState, api) => {
  console.log(guestId);
  const res = await api.delete("/guests/" + guestId);

  dispatch({
    type: DELETE_GUEST,
    payload: res
  });
};

export const updateGuest = guest => async (dispatch, getState, api) => {
  console.log(guest);
  const res = await api.patch("/guests/" + guest._id);

  dispatch({
    type: UPDATE_GUEST,
    payload: res
  });
};
