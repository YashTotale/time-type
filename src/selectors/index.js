import { createSelectors } from "reselect";

export const getIsSidebarOpen = (state) => state.isSidebarOpen;
export const getWordList = (state) => state.typer.wordList;
export const getCurrentWord = (state) => state.typer.currentWord;
export const getUserInputWordList = (state) => state.typer.userInputWordList;
