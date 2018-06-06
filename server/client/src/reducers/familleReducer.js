import {
  SAVE_FAMILLE,
  UPDATE_FAMILLE,
  DELETE_FAMILLE,
  FETCH_FAMILLE
} from "../actions/types";

const INITIAL_STATE = {
  familles: [],
  lastAdded: {},
  deleted: {},
  updated: {}
};

export default (state = INITIAL_STATE, actions) => {
  const familles = [];
  switch (actions.type) {
    case FETCH_FAMILLE:
      actions.payload.data.famille.forEach(element => {
        familles.push({ ...element, key: element._id });
      });
      return { ...state, familles };
    case SAVE_FAMILLE:
      return { ...state, lastAdded: actions.payload.data };
    case DELETE_FAMILLE:
      return { ...state, deleted: actions.payload.data };
    case UPDATE_FAMILLE:
      return { ...state, updated: actions.payload.data };
    default:
      return state;
  }
};
