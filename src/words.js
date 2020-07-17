import _ from "lodash";

// export const getWordList = (amount, difficulty) => {
//   //Difficulty determines weight given to different sections of words (sorted by length)
//   //Example = 0: 3* weight to 1st third, 2* weight to 2nd third, 1* weight to 3rd third
//   let words = [
//     [
//       { char: "h", isCorrect: null },
//       { char: "h", isCorrect: null },
//     ],
//     [
//       { char: "h", isCorrect: null },
//       { char: "h", isCorrect: null },
//     ],
//   ];
//   let easyWeight;
//   let mediumWeight;
//   let hardWeight;
//   let firstThird = [];
//   let secondThird = [];
//   let thirdThird = [];
//   if (difficulty === 0) {
//     easyWeight = 3;
//     mediumWeight = 2;
//     hardWeight = 1;
//   } else if (difficulty === 1) {
//     easyWeight = 2;
//     mediumWeight = 2;
//     hardWeight = 2;
//   } else {
//     easyWeight = 1;
//     mediumWeight = 2;
//     hardWeight = 3;
//   }
//   for (let i = 0; i < easyWeight; i++) {
//     firstThird = [
//       ...firstThird,
//       ...words.slice(0, Math.floor(words.length / 3)),
//     ];
//   }
//   for (let i = 0; i < mediumWeight; i++) {
//     secondThird = [
//       ...secondThird,
//       ...words.slice(
//         Math.floor(words.length / 3),
//         Math.floor(words.length / 3) * 2
//       ),
//     ];
//   }
//   for (let i = 0; i < hardWeight; i++) {
//     thirdThird = [
//       ...thirdThird,
//       ...words.slice(Math.floor(words.length / 3) * 2),
//     ];
//   }
//   const newWords = [...firstThird, ...secondThird, ...thirdThird];
//   return _.sampleSize(newWords, amount);
// };

export const findWord = (search) => {
  let returnVal;
  words.some((word) => {
    if (search.length === word.length) {
      let matchesSearch = true;
      word.some((character, i) => {
        let characterName = character.char;
        if (search.charAt(i) !== characterName) {
          matchesSearch = false;
          return true;
        }
      });
      if (matchesSearch) {
        returnVal = word;
        return true;
      }
    }
    return false;
  });
  return returnVal;
};

export const changeWord = (currentWord, input, words = words) => {
  let word = words[currentWord];
  let newWord = word.map((character, i) => {
    if (i < input.length || input.slice(-1) === " ") {
      return { char: character.char, userChar: input.charAt(i) };
    }
    return { char: character.char, userChar: null };
  });
  return [newWord, input.slice(-1) === " " ? currentWord + 1 : currentWord];
};

export const mapCharacters = (func) => {
  let newWords = words.map((word) => {
    return word.map((character) => {
      return func(character);
    });
  });
  return newWords;
};
