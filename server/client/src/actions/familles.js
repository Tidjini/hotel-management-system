import {
  FETCH_FAMILLE,
  SAVE_FAMILLE,
  DELETE_FAMILLE,
  UPDATE_FAMILLE
} from "./types";

export const fetchFamilles = () => async (dispatch, getState, api) => {
  const res = await api.get("/familles");
  dispatch({
    type: FETCH_FAMILLE,
    payload: res
  });
};

export const addFamille = famille => async (dispatch, getState, api) => {
  const res = await api.post("/familles", famille);
  dispatch({
    type: SAVE_FAMILLE,
    payload: res
  });
};

export const deleteFamille = familleId => async (dispatch, getState, api) => {
  const res = await api.delete("/familles/" + familleId);
  dispatch({
    type: DELETE_FAMILLE,
    payload: res
  });
};

export const updateFamille = famille => async (dispatch, getState, api) => {
  const res = await api.patch("/familles/" + famille._id, famille);
  dispatch({
    type: UPDATE_FAMILLE,
    payload: res
  });
};
