import { TOGGLE_SIDEBAR } from "../actions";

const initialSidebarState = {
  isSidebarOpen: false,
};

export const sidebar = (state = initialSidebarState, action) => {
  const { type, payload } = action;
  switch (type) {
    case TOGGLE_SIDEBAR: {
      const { isSidebarOpen } = payload;
      return { ...state, isSidebarOpen };
    }
    default:
      return state;
  }
};
