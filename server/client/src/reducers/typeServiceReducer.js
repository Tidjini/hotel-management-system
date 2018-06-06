import {
  SAVE_TYPE_SERVICE,
  DELETE_TYPE_SERVICE,
  UPDATE_TYPE_SERVICE,
  FETCH_TYPE_SERVICE
} from "../actions/types";

const INITIAL_STATE = {
  typeServices: [],
  lastAdded: {},
  deleted: {},
  updated: {}
};

export default (state = INITIAL_STATE, actions) => {
  const typeServices = [];
  switch (actions.type) {
    case FETCH_TYPE_SERVICE:
      actions.payload.data.typeServices.forEach(element => {
        typeServices.push({ ...element, key: element._id });
      });
      return { ...state, typeServices };
    case SAVE_TYPE_SERVICE:
      return { ...state, lastAdded: actions.payload.data };
    case DELETE_TYPE_SERVICE:
      return { ...state, deleted: actions.payload.data };
    case UPDATE_TYPE_SERVICE:
      return { ...state, updated: actions.payload.data };
    default:
      return state;
  }
};
