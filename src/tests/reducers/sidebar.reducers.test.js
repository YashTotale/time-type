import { sidebar } from "../../reducers";
import { TOGGLE_SIDEBAR } from "../../actions";

describe("The sidebar Reducer", () => {
  const tests = [
    {
      expected: { isSidebarOpen: false },
      original: { isSidebarOpen: true },
      payload: { isSidebarOpen: false },
    },
    {
      expected: { isSidebarOpen: true },
      original: { isSidebarOpen: false },
      payload: { isSidebarOpen: true },
    },
    {
      expected: { isSidebarOpen: true },
      original: { isSidebarOpen: true },
      payload: { isSidebarOpen: true },
    },
    {
      expected: { isSidebarOpen: false },
      original: { isSidebarOpen: false },
      payload: { isSidebarOpen: false },
    },
  ];
  tests.forEach((t) => {
    test(`Sets isSidebarOpen to ${t.expected.isSidebarOpen} from ${t.original.isSidebarOpen} when payload of ${t.payload.isSidebarOpen} is received for TOGGLE_SIDEBAR`, () => {
      const fakeAction = {
        type: TOGGLE_SIDEBAR,
        payload: t.payload,
      };

      const originalState = t.original;

      const expected = t.expected;

      const actual = sidebar(originalState, fakeAction);

      expect(actual).toEqual(expected);
    });
  });
});
