import { useDispatch } from "react-redux";
import {} from "../actions";

export const getWordsRequest = () => async () => {
  const dispatch = useDispatch();
  try {
    dispatch(loadWordsInProgress());
    const response = await fetch("http://localhost:3004/words");
    const words = await response.json();

    dispatch(loadWordsSuccess());
  } catch (e) {
    dispatch(loadWordsFailure());
  }
};
