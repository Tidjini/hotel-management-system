import { FETCH_GUESTS } from "./types";

export const fetchGuests = () => async (dispatch, getState, api) => {
  const res = await api.get("/guests");
  dispatch({
    type: FETCH_GUESTS,
    payload: res
  });
};
