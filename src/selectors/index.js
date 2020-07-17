import { createSelectors } from "reselect";

export const getIsSidebarOpen = (state) => state.isSidebarOpen;
export const getWordList = (state) => state.typer.wordList;
export const getCurrentWord = (state) => state.typer.currentWord;
export const getDifficulty = (state) => state.typer.difficulty;
export const getIsTyperLoading = (state) => state.typer.isLoading;
export const getIsTyperError = (state) => state.typer.isError;
