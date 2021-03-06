import {
  SAVE_CLIENT,
  UPDATE_CLIENT,
  DELETE_CLIENT,
  FETCH_CLIENT,
  GET_CLIENT_BY_ID
} from "../actions/types";

const INITIAL_STATE = {
  clients: [],
  lastAdded: undefined,
  deleted: undefined,
  updated: undefined,
  recentClient: undefined
};

export default (state = INITIAL_STATE, actions) => {
  const clients = [];
  switch (actions.type) {
    case FETCH_CLIENT:
      actions.payload.data.clients.forEach(element => {
        clients.push({ ...element, key: element._id });
      });
      return { ...state, clients };
    case GET_CLIENT_BY_ID:
      console.log(actions.payload.data.client);
      return { ...state, recentClient: actions.payload.data.client };
    case SAVE_CLIENT:
      return { ...state, lastAdded: actions.payload.data };
    case DELETE_CLIENT:
      return { ...state, deleted: actions.payload.data };
    case UPDATE_CLIENT:
      return { ...state, updated: actions.payload.data };
    default:
      return state;
  }
};
