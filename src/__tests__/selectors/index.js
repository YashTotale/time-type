export const sampleState = {
  sidebar: { isSidebarOpen: false },
  typer: {
    wordList: [
      [
        { char: "h", isCorrect: null },
        { char: "e", isCorrect: null },
        { char: "l", isCorrect: null },
        { char: "l", isCorrect: null },
        { char: "o", isCorrect: null },
      ],
      [
        { char: "w", isCorrect: null },
        { char: "o", isCorrect: null },
        { char: "r", isCorrect: null },
        { char: "l", isCorrect: null },
        { char: "d", isCorrect: null },
      ],
    ],
    currentWord: 0,
    difficulty: 0,
    isLoading: false,
    isError: false,
  },
};
