import {
  loadWordsInProgress,
  loadWordsSuccess,
  loadWordsFailure,
} from "../actions";

export const getWordsRequest = () => async (dispatch) => {
  try {
    dispatch(loadWordsInProgress());
    const response = await fetch(
      "http://localhost:3004/words?_start=721&_end=821"
    );
    const words = await response.json();

    dispatch(loadWordsSuccess(words));
  } catch (e) {
    console.log(e);
    dispatch(loadWordsFailure(e));
  }
};
