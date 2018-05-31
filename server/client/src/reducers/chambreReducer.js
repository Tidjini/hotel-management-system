import {
  SAVE_CHAMBRE,
  UPDATE_CHAMBRE,
  DELETE_CHAMBRE,
  FETCH_CHAMBRES
} from "../actions/types";

const INITIAL_STATE = {
  chambres: [],
  lastAdded: {},
  deleted: {},
  updated: {}
};

export default (state = INITIAL_STATE, actions) => {
  switch (actions.type) {
    case FETCH_CHAMBRES:
      return { ...state, chambres: actions.payload.data.chambres };
    case SAVE_CHAMBRE:
      return { ...state, lastAdded: actions.payload.data };
    case DELETE_CHAMBRE:
      return { ...state, deleted: actions.payload.data };
    case UPDATE_CHAMBRE:
      return { ...state, updated: actions.payload.data };
    default:
      return state;
  }
};
