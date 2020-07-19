import {
  LOAD_WORDS_IN_PROGRESS,
  LOAD_WORDS_FAILURE,
  LOAD_WORDS_SUCCESS,
} from "../../actions";
import { typer } from "../../reducers";

const typerState = {
  wordList: [
    [
      { char: "h", isCorrect: null },
      { char: "e", isCorrect: null },
      { char: "l", isCorrect: null },
      { char: "l", isCorrect: null },
      { char: "o", isCorrect: null },
    ],
    [
      { char: "w", isCorrect: null },
      { char: "o", isCorrect: null },
      { char: "r", isCorrect: null },
      { char: "l", isCorrect: null },
      { char: "d", isCorrect: null },
    ],
  ],
  currentWord: 0,
  difficulty: 0,
  isLoading: false,
  isError: false,
};

describe("The typer reducer", () => {
  const loadWordsStates = [
    { ...typerState, isLoading: true },
    { ...typerState, isLoading: false },
  ];
  loadWordsStates.forEach((state) => {
    test(`Sets isLoading to true from ${state.isLoading} when LOAD_WORDS_IN_PROGRESS action is recieved`, () => {
      const fakeAction = { type: LOAD_WORDS_IN_PROGRESS };
      const expected = { ...state, isLoading: true };
      const actual = typer(state, fakeAction);
      expect(actual).toEqual(expected);
    });

    test(`Sets isLoading to false from ${state.isLoading} and isError to the error when LOAD_WORDS_FAILURE action is recieved`, () => {
      const fakeAction = {
        type: LOAD_WORDS_FAILURE,
        payload: { error: "This is the error" },
      };
      const expected = {
        ...state,
        isLoading: false,
        isError: "This is the error",
      };
      const actual = typer(state, fakeAction);
      expect(actual).toEqual(expected);
    });
    test(`Sets isLoading to false from ${state.isLoading} and wordList to the words when LOAD_WORDS_FAILURE action is recieved`, () => {
      const fakeAction = {
        type: LOAD_WORDS_SUCCESS,
        payload: { wordList: [[{ char: "h", isCorrect: null }]] },
      };
      const expected = {
        ...state,
        isLoading: false,
        wordList: [[{ char: "h", isCorrect: null }]],
      };
      const actual = typer(state, fakeAction);
      expect(actual).toEqual(expected);
    });
  });
});
