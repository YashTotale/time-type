import {
  HANDLE_INPUT_CHANGE,
  SET_NEW_DIFFICULTY,
  LOAD_WORDS_IN_PROGRESS,
  LOAD_WORDS_SUCCESS,
  LOAD_WORDS_FAILURE,
} from "../actions";
import { changeWord } from "../words";

const initialTyperState = {
  wordList: [],
  currentWord: 0,
  difficulty: 0,
  isLoading: false,
  isError: false,
};

export const typer = (state = initialTyperState, action) => {
  const { type, payload } = action;
  switch (type) {
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
        currentWord: 0,
      };
    }
    case LOAD_WORDS_IN_PROGRESS: {
      return { ...state, isLoading: true };
    }
    case LOAD_WORDS_SUCCESS: {
      const { words } = payload;
      return { ...state, isLoading: false, wordList: words };
    }
    case LOAD_WORDS_FAILURE: {
      const { error } = payload;
      return { ...state, isLoading: false, isError: error };
    }
    default:
      return state;
  }
};
