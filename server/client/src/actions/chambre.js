import {
  FETCH_CHAMBRES,
  UPDATE_CHAMBRE,
  DELETE_CHAMBRE,
  SAVE_CHAMBRE
} from "./types";

export const fetchChambres = () => async (dispatch, getState, api) => {
  const res = await api.get("/chambres");
  dispatch({
    type: FETCH_CHAMBRES,
    payload: res
  });
};
