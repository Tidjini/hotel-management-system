import { SAVE_GUEST } from "../actions/types";

export default (state = [], actions) => {
  switch (actions.type) {
    case SAVE_GUEST:
      return actions.payload.data || false;

    default:
      return state;
  }
};
