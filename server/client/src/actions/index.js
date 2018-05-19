import { FETCH_GUESTS, SAVE_GUEST } from "./types";
//import Axios from "axios";

export const fetchGuests = () => async (dispatch, getState, api) => {
  const res = await api.get("/guests");
  dispatch({
    type: FETCH_GUESTS,
    payload: res
  });
};

export const addGuest = guest => async (dispatch, getState, api) => {
  console.log(api.baseURL);
  const res = await api.post("/guests", guest);

  //const res = await Axios.post("http://localhost:5000/api/guests", guest);
  dispatch({
    type: SAVE_GUEST,
    payload: res
  });
};
