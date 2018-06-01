import { ADD_TAB, REMOVE_TAB, CHANGE_TAB } from "./types";

export const addTab = tab => {
  return {
    type: ADD_TAB,
    payload: tab
  };
};

export const removeTab = tab => {
  return {
    type: REMOVE_TAB,
    payload: tab
  };
};

export const changeTab = tab => {
  return {
    type: CHANGE_TAB,
    payload: tab
  };
};
