import { ADD_TAB, REMOVE_TAB } from "../actions/types";

const INITIAL_STATE = {
  Tabs: ["Home"],
  Current: "Home"
};

export default (state = INITIAL_STATE, actions) => {
  let Tabs = [];
  switch (actions.type) {
    case ADD_TAB:
      Tabs = state.Tabs;
      Tabs.push(actions.payload);
      return { ...state, Tabs, Current: actions.payload };
    case REMOVE_TAB:
      Tabs = state.Tabs;
      const index = Tabs.indexOf(actions.payload);
      if (index > -1) {
        Tabs.splice(index, 1);
      }
      return { ...state, Tabs, Current: Tabs[Tabs.length - 1] };

    default:
      return state;
  }
};
