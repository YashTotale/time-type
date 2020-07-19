import {
  getWordList,
  getCurrentWord,
  getDifficulty,
  getIsTyperLoading,
  getIsTyperError,
} from "../../selectors";
import { sampleState } from ".";

describe("The typer Selectors", () => {
  test("Gets the wordList propery", () => {
    const expected = sampleState.typer.wordList;
    const actual = getWordList(sampleState);
    expect(actual).toEqual(expected);
  });
  test("Gets the currentWord property", () => {
    const expected = sampleState.typer.currentWord;
    const actual = getCurrentWord(sampleState);
    expect(actual).toEqual(expected);
  });
  test("Gets the difficulty property", () => {
    const expected = sampleState.typer.difficulty;
    const actual = getDifficulty(sampleState);
    expect(actual).toEqual(expected);
  });
  test("Gets the isTyperLoading property", () => {
    const expected = sampleState.typer.isLoading;
    const actual = getIsTyperLoading(sampleState);
    expect(actual).toEqual(expected);
  });
  test("Gets the isTyperError loading", () => {
    const expected = sampleState.typer.isError;
    const actual = getIsTyperError(sampleState);
    expect(actual).toEqual(expected);
  });
});
