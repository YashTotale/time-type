import { TOGGLE_SIDEBAR } from "../actions";

const initialState = false;

export const isSidebarOpen = (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case TOGGLE_SIDEBAR: {
      return payload.shouldOpenSidebar;
    }
    default:
      return state;
  }
};
