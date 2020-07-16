export const SET_WORD_LIST = "SET_WORD_LIST";
export const setWordList = (wordList) => ({
  type: SET_WORD_LIST,
  payload: { wordList },
});

export const HANDLE_INPUT_CHANGE = "HANDLE_INPUT_CHANGE";
export const handleInputChange = (inputValue) => ({
  type: HANDLE_INPUT_CHANGE,
  payload: { inputValue },
});

export const SET_USER_INPUT_WORD_LIST = "SET_USER_INPUT_WORD_LIST";
