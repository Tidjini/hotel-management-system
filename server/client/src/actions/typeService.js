import {
  FETCH_TYPE_SERVICE,
  SAVE_TYPE_SERVICE,
  UPDATE_TYPE_SERVICE,
  DELETE_TYPE_SERVICE
} from "./types";

export const fetchTypeServices = () => async (dispatch, getState, api) => {
  const res = await api.get("/TypeServices");
  dispatch({
    type: FETCH_TYPE_SERVICE,
    payload: res
  });
};

export const addTypeService = TypeService => async (
  dispatch,
  getState,
  api
) => {
  const res = await api.post("/TypeServices", TypeService);
  dispatch({
    type: SAVE_TYPE_SERVICE,
    payload: res
  });
};

export const deleteTypeService = TypeServiceId => async (
  dispatch,
  getState,
  api
) => {
  const res = await api.delete("/TypeServices/" + TypeServiceId);
  dispatch({
    type: DELETE_TYPE_SERVICE,
    payload: res
  });
};

export const updateTypeService = TypeService => async (
  dispatch,
  getState,
  api
) => {
  const res = await api.patch("/TypeServices/" + TypeService._id, TypeService);
  dispatch({
    type: UPDATE_TYPE_SERVICE,
    payload: res
  });
};
