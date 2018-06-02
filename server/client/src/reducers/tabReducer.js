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
  const { panes, tabs } = state;
  const tab = actions.payload;

  switch (actions.type) {
    case ADD_TAB:
      const pane = {
        title: tab,
        content: "eaz",
        key: tab
      };

      const indexPane = tabs.indexOf(tab);
      if (indexPane > -1) {
        return { ...state, current: tab };
      } else {
        panes.push(pane);
        tabs.push(tab);
        return { ...state, panes, current: tab, tabs };
      }

    case REMOVE_TAB:
      const index = tabs.indexOf(tab);
      if (index > -1) {
        panes.splice(index, 1);
        tabs.splice(index, 1);
        const activeIndex = index == 0 ? 0 : index - 1;
        return { ...state, panes, current: tabs[activeIndex] };
      } else {
        return state;
      }

    case CHANGE_TAB:
      return { ...state, current: actions.payload };
    default:
      return state;
  }
};
