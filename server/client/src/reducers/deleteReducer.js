import { DELETE_GUEST } from "../actions/types";

export default (state = [], actions) => {
  switch (actions.type) {
    case DELETE_GUEST:
      return actions.payload.data;

    default:
      return state;
  }
};
