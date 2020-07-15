import { TOGGLE_SIDEBAR, SET_NAV_BAR_HEIGHT } from "../actions";

const initialSidebarState = false;

export const isSidebarOpen = (state = initialSidebarState, action) => {
  const { type, payload } = action;
  switch (type) {
    case TOGGLE_SIDEBAR: {
      const { shouldOpenSidebar } = payload;
      return shouldOpenSidebar;
    }
    default:
      return state;
  }
};
