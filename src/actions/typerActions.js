export const SET_WORD_LIST = "SET_WORD_LIST";
export const setWordList = (wordList) => ({
  type: SET_WORD_LIST,
  payload: { wordList },
});

export const HANDLE_INPUT_CHANGE = "HANDLE_INPUT_CHANGE";
export const handleInputChange = (input) => ({
  type: HANDLE_INPUT_CHANGE,
  payload: { input },
});

export const SET_NEW_DIFFICULTY = "SET_NEW_DIFFICULTY";
export const setNewDifficulty = (difficulty) => ({
  type: SET_NEW_DIFFICULTY,
  payload: { difficulty },
});
