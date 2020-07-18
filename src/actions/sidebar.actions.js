export const TOGGLE_SIDEBAR = "TOGGLE_SIDEBAR";
export const toggleSidebar = (shouldOpenSidebar) => ({
  type: TOGGLE_SIDEBAR,
  payload: { shouldOpenSidebar },
});
