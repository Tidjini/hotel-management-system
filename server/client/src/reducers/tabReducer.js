import { ADD_TAB, REMOVE_TAB, CHANGE_TAB } from "../actions/types";

const INITIAL_STATE = {
  panes: [
    {
      title: "Home",
      key: "Home-new",
      closable: false,
      component: "Home"
    }
  ],
  tabs: ["Home-new"],
  current: "Home-new"
};

export default (state = INITIAL_STATE, actions) => {
  const { panes, tabs } = state;
  const tabInfo = actions.payload;
  const tab = tabInfo == undefined ? "Home-new" : tabInfo[0] + "-" + tabInfo[1];

  switch (actions.type) {
    case ADD_TAB:
      console.log(tab + " add");

      const pane = {
        title: tabInfo[0],
        key: tab,
        component: tabInfo[0]
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
      console.log(tab + " remove");

      const index = tabs.indexOf(tab);

      if (index > -1) {
        panes.splice(index, 1);
        tabs.splice(index, 1);
        const activeIndex = index === 0 ? 0 : index - 1;
        return { ...state, panes, current: tabs[activeIndex] };
      } else {
        return state;
      }

    case CHANGE_TAB:
      return { ...state, current: tab };
    default:
      return state;
  }
};
