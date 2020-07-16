import { SET_WORD_LIST } from "../actions";
import { getWords } from "../words";

const initialTyperState = {
  wordList: getWords(100),
  userInputWordList: [],
  currentWord: 0,
};

export const typer = (state = initialTyperState, action) => {
  const { type, payload } = action;
  switch (type) {
    case SET_WORD_LIST: {
      const { wordList } = payload;
      return { ...state, wordList };
    }
    default:
      return state;
  }
};
