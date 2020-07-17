import {
  SET_WORD_LIST,
  HANDLE_INPUT_CHANGE,
  SET_NEW_DIFFICULTY,
} from "../actions";
import { getWordList } from "../words";
import { changeWord } from "../words";

const initialTyperState = {
  wordList: getWordList(100, 0),
  currentWord: 0,
  difficulty: 0,
};

export const typer = (state = initialTyperState, action) => {
  const { type, payload } = action;
  switch (type) {
    case SET_WORD_LIST: {
      const { wordList } = payload;
      return { ...state, wordList };
    }
    case HANDLE_INPUT_CHANGE: {
      const { input } = payload;
      const newWordList = [...state.wordList];
      let newCurrentWord = state.currentWord;
      [newWordList[state.currentWord], newCurrentWord] = changeWord(
        state.currentWord,
        input,
        state.wordList
      );
      return { ...state, wordList: newWordList, currentWord: newCurrentWord };
    }
    case SET_NEW_DIFFICULTY: {
      const { difficulty } = payload;
      return {
        ...state,
        difficulty,
        wordList: getWordList(100, difficulty),
        currentWord: 0,
      };
    }
    default:
      return state;
  }
};
