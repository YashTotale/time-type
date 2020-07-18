import { expect } from "chai";
import { isSidebarOpen } from "../../reducers";
import { TOGGLE_SIDEBAR } from "../../actions";

describe("The isSidebarOpen Reducer", () => {
  it("Toggles the sidebar when TOGGLE_SIDEBAR action is recieved", () => {
    const fakeAction = {
      type: TOGGLE_SIDEBAR,
      payload: { shouldOpenSidebar: false },
    };

    const originalState = true;

    const expected = false;

    const actual = isSidebarOpen(originalState, fakeAction);

    expect(actual).to.deep.equal(expected);
  });
});
