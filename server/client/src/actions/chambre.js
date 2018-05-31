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

export const addChambre = chambre => async (dispatch, getState, api) => {
  const res = await api.post("/chambres", chambre);
  dispatch({
    type: SAVE_CHAMBRE,
    payload: res
  });
};

export const deleteChambre = chambreId => async (dispatch, getState, api) => {
  const res = await api.delete("/chambres/" + chambreId);
  dispatch({
    type: DELETE_CHAMBRE,
    payload: res
  });
};

export const updateChambre = chambre => async (dispatch, getState, api) => {
  const res = await api.patch("/chambres/" + chambre._id);
  dispatch({
    type: UPDATE_CHAMBRE,
    payload: res
  });
};
