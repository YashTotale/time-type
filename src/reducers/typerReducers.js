import { SET_WORD_LIST, HANDLE_INPUT_CHANGE } from "../actions";
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
    case HANDLE_INPUT_CHANGE: {
      const { inputValue } = payload;
      if (inputValue.slice(-1) === " ") {
        return { ...state, currentWord: state.currentWord + 1 };
      }
      let userInputWordList = state.userInputWordList;
      userInputWordList[state.currentWord] = inputValue.split("");
      return { ...state, userInputWordList };
    }
    default:
      return state;
  }
};
