export const SET_WORD_LIST = "SET_WORD_LIST";
export const setWordList = (wordList) => ({
  type: SET_WORD_LIST,
  payload: { wordList },
});

export const SET_CURRENT_WORD = "SET_CURRENT_WORD";
export const setCurrentWord = (currentWord) => ({
  type: SET_CURRENT_WORD,
  payload: { currentWord },
});

export const SET_CURRENT_CHARACTER = "SET_CURRENT_CHARACTER";
export const setCurrentCharacter = (currentCharacter) => ({
  type: SET_CURRENT_CHARACTER,
  payload: { currentCharacter },
});
