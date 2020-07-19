import { getIsSidebarOpen } from "../../selectors/sidebar.selectors";
import { sampleState } from "./index";

describe("The sidebar Selectors", () => {
  test("Gets the isSidebarOpen property", () => {
    const expected = sampleState.sidebar.isSidebarOpen;
    const actual = getIsSidebarOpen(sampleState);
    expect(actual).toEqual(expected);
  });
});
