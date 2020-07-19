import { sidebar } from "../../reducers";
import { TOGGLE_SIDEBAR } from "../../actions";

describe("The sidebar Reducer", () => {
  const toggleSidebarTests = [
    {
      expected: false,
      original: true,
      payload: false,
    },
    {
      expected: true,
      original: false,
      payload: true,
    },
    {
      expected: true,
      original: true,
      payload: true,
    },
    {
      expected: false,
      original: false,
      payload: false,
    },
  ];
  toggleSidebarTests.forEach((t) => {
    test(`Sets isSidebarOpen to ${t.expected} from ${t.original} when payload of ${t.payload} is received for TOGGLE_SIDEBAR`, () => {
      const fakeAction = {
        type: TOGGLE_SIDEBAR,
        payload: { isSidebarOpen: t.payload },
      };

      const originalState = { isSidebarOpen: t.original };

      const expected = { isSidebarOpen: t.expected };

      const actual = sidebar(originalState, fakeAction);

      expect(actual).toEqual(expected);
    });
  });
});
