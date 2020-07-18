import { expect } from "chai";
import {
  LOAD_WORDS_IN_PROGRESS,
  LOAD_WORDS_FAILURE,
  LOAD_WORDS_SUCCESS,
} from "../../actions";
import { typer } from "../../reducers";

const originalState = {
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
  difficulty: 1,
  isLoading: false,
  isError: false,
};

describe("The typer reducer", () => {
  it("Sets isLoading to true when LOAD_WORDS_IN_PROGRESS action is recieved", () => {
    const fakeAction = { type: LOAD_WORDS_IN_PROGRESS };
    const expected = { ...originalState, isLoading: true };
    const actual = typer(originalState, fakeAction);
    expect(actual).to.deep.equal(expected);
  });

  it("Sets isLoading to false and isError to the error when LOAD_WORDS_FAILURE action is recieved", () => {
    const fakeAction = {
      type: LOAD_WORDS_FAILURE,
      payload: { error: "This is the error" },
    };
    const initialState = { ...originalState, isLoading: true };
    const expected = {
      ...initialState,
      isLoading: false,
      isError: "This is the error",
    };
    const actual = typer(initialState, fakeAction);
    expect(actual).to.deep.equal(expected);
  });

  it("Sets isLoading to false and wordList to the words when LOAD_WORDS_FAILURE action is recieved", () => {
    const fakeAction = {
      type: LOAD_WORDS_SUCCESS,
      payload: { wordList: [[{ char: "h", isCorrect: null }]] },
    };
    const initialState = { ...originalState, isLoading: true };
    const expected = {
      ...initialState,
      isLoading: false,
      wordList: [[{ char: "h", isCorrect: null }]],
    };
    const actual = typer(initialState, fakeAction);
    expect(actual).to.deep.equal(expected);
  });
});
