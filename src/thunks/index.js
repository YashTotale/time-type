import {
  loadWordsInProgress,
  loadWordsSuccess,
  loadWordsFailure,
} from "../actions";

export const getWords = () => async (dispatch, getState) => {
  try {
    dispatch(loadWordsInProgress());
    const response = await fetch(
      "http://localhost:3004/words?_start=721&_end=821"
    );
    const wordList = await response.json();

    dispatch(loadWordsSuccess(wordList));
  } catch (e) {
    console.log(e);
    dispatch(loadWordsFailure(e));
  }
};
