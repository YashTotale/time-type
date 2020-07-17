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

export const LOAD_WORDS_IN_PROGRESS = "LOAD_WORDS_IN_PROGRESS";
export const loadWordsInProgress = () => ({
  type: LOAD_WORDS_IN_PROGRESS,
});

export const LOAD_WORDS_SUCCESS = "LOAD_WORDS_SUCCESS";
export const loadWordsSuccess = (words) => ({
  type: LOAD_WORDS_SUCCESS,
  payload: { words },
});

export const LOAD_WORDS_FAILURE = "LOAD_WORDS_FAILURE";
export const loadWordsFailure = (error) => ({
  type: LOAD_WORDS_FAILURE,
  payload: { error },
});
