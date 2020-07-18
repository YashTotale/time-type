export const TOGGLE_SIDEBAR = "TOGGLE_SIDEBAR";
export const toggleSidebar = (isSidebarOpen) => ({
  type: TOGGLE_SIDEBAR,
  payload: { isSidebarOpen },
});
