import { ADD_TAB, REMOVE_TAB, CHANGE_TAB } from "../actions/types";

const INITIAL_STATE = {
  panes: [
    {
      title: "Home",
      content: "Home",
      key: "Home"
    }
  ],
  tabs: ["Home"],
  current: "Home"
};

export default (state = INITIAL_STATE, actions) => {
  let Tabs = [];
  switch (actions.type) {
    case ADD_TAB:
      const tab = actions.payload;

      const pane = {
        title: tab,
        content: "eaz",
        key: tab
      };
      const { panes, tabs } = state;

      const indexPane = tabs.indexOf(tab);
      if (indexPane > -1) {
        return { ...state, current: tab };
      } else {
        panes.push(pane);
        tabs.push(tab);
        return { ...state, panes, current: tab, tabs };
      }

    case REMOVE_TAB:
      Tabs = state.Tabs;
      const index = Tabs.indexOf(actions.payload);
      if (index > -1) {
        Tabs.splice(index, 1);
      }
      return { ...state, Tabs, Current: Tabs[Tabs.length - 1] };

    case CHANGE_TAB:
      return { ...state, current: actions.payload };
    default:
      return state;
  }
};
