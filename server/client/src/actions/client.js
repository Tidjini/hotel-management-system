import {
  FETCH_CLIENT,
  GET_CLIENT_BY_ID,
  UPDATE_CLIENT,
  DELETE_CLIENT,
  SAVE_CLIENT
} from "./types";

export const fetchClients = () => async (dispatch, getState, api) => {
  const res = await api.get("/clients");
  dispatch({
    type: FETCH_CLIENT,
    payload: res
  });
};

export const getClientById = id => async (dispatch, getState, api) => {
  const res = await api.get("/clients/" + id);
  dispatch({
    type: GET_CLIENT_BY_ID,
    payload: res
  });
};
export const addClient = Client => async (dispatch, getState, api) => {
  const res = await api.post("/clients", Client);
  dispatch({
    type: SAVE_CLIENT,
    payload: res
  });
};

export const deleteClient = ClientId => async (dispatch, getState, api) => {
  const res = await api.delete("/clients/" + ClientId);
  dispatch({
    type: DELETE_CLIENT,
    payload: res
  });
};

export const updateClient = Client => async (dispatch, getState, api) => {
  const res = await api.patch("/clients/" + Client._id, Client);
  dispatch({
    type: UPDATE_CLIENT,
    payload: res
  });
};
