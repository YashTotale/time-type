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
