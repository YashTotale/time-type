import { getIsSidebarOpen } from "../../selectors/sidebar.selectors";

const state = {
  sidebar: {
    isSidebarOpen: false,
  },
  typer: {},
};

describe("The Sidebar Selectors", () => {
  it("Gets the isSidebarOpen property", () => {
    const expected = false;
    const actual = getIsSidebarOpen(state);
  });
});
