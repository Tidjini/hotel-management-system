import { FETCH_GUESTS } from "../actions/types";

export default (state = [], actions) => {
  switch (actions.type) {
    case FETCH_GUESTS:
      return actions.payload.data;
    default:
      return state;
  }
};
