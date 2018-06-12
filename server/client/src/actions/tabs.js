import { ADD_TAB, REMOVE_TAB, CHANGE_TAB } from "./types";

export const addTab = tab => {
  const tabInfo = tab.split("-");
  return {
    type: ADD_TAB,
    payload: tabInfo
  };
};

export const removeTab = tab => {
  const tabInfo = tab.split("-");
  return {
    type: REMOVE_TAB,
    payload: tabInfo
  };
};

export const changeTab = tab => {
  const tabInfo = tab.split("-");

  return {
    type: CHANGE_TAB,
    payload: tabInfo
  };
};
