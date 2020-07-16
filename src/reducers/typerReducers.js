import {
  SET_WORD_LIST,
  SET_CURRENT_WORD,
  SET_CURRENT_CHARACTER,
} from "../actions";
import { getWords } from "../words";

const initialTyperState = {
  wordList: getWords(100),
  currentWord: 0,
  currentCharacter: 0,
};

export const typer = (state = initialTyperState, action) => {
  const { type, payload } = action;
  switch (type) {
    case SET_WORD_LIST: {
      const { wordList } = payload;
      return { ...state, wordList };
    }
    case SET_CURRENT_WORD: {
      const { currentWord } = payload;
      return { ...state, currentWord };
    }
    case SET_CURRENT_CHARACTER: {
      const { currentCharacter } = payload;
      return { ...state, currentCharacter };
    }
    default:
      return state;
  }
};
