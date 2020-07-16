// React Imports
import React from "react";

// Redux Imports
import { useDispatch, useSelector, shallowEqual } from "react-redux";

import {
  getWordList,
  getCurrentWord,
  getUserInputWordList,
} from "../../selectors";
import { setWordList, handleInputChange } from "../../actions";

// Material UI Imports
import { makeStyles } from "@material-ui/core/styles";
import { Paper, TextField, Typography } from "@material-ui/core";
import {} from "@material-ui/icons";

// Style Creator
const useTyperStyles = makeStyles((theme) => ({
  typer: {
    alignSelf: "center",
    margin: "auto",
    minWidth: "50%",
    maxWidth: "960px",
  },
  typingPaper: {
    marginTop: "64px",
  },
  typingInput: {
    "& .MuiOutlinedInput-root": {
      "& input": {
        textAlign: "center",
      },
    },
  },
  words: {
    margin: "10px",
    display: "flex",
    flexWrap: "wrap",
  },
  word: (props) => ({
    color: "black",
    display: "flex",
    margin: "3px",
    fontSize: 20,
    lineHeight: 1.5,
  }),
  character: (props) => ({
    color: props.currentCharacter ? "blue" : "black",
    minWidth: "5px",
  }),
}));

const Typer = ({}) => {
  //Styles
  const classes = useTyperStyles();
  //Variables
  const wordList = useSelector(getWordList);
  const userInputWordList = useSelector(
    getUserInputWordList,
    (left, right) => false
  );
  console.log(userInputWordList);
  const currentWord = useSelector(getCurrentWord);
  return (
    <>
      <div className={classes.typer} id="typer">
        <Paper className={classes.typingPaper} variant="outlined" elevation={3}>
          <div className={classes.words}>
            {wordList.map((word, i) => {
              return (
                <Word
                  key={i}
                  word={word}
                  userInputWord={userInputWordList[i]}
                  currentWord={i === currentWord}
                />
              );
            })}
          </div>
          <TypingInput
            userInputWordList={userInputWordList}
            currentWord={currentWord}
          />
        </Paper>
      </div>
    </>
  );
};

const Word = ({ word, currentWord, userInputWord = [] }) => {
  const classes = useTyperStyles({ currentWord });
  return (
    <div className={classes.word}>
      {word.map((character, i) => {
        return (
          <Character
            userInputCharacter={userInputWord[i]}
            key={i}
            character={character}
          />
        );
      })}
    </div>
  );
};

const Character = ({ character, userInputCharacter }) => {
  const classes = useTyperStyles();
  return <div className={classes.character}>{character}</div>;
};

const TypingInput = ({ userInputWordList = [], currentWord = 0 }) => {
  //Dispatch
  const dispatch = useDispatch();
  const handleTypingInputChange = (e) =>
    dispatch(handleInputChange(e.target.value));
  //Styles
  const classes = useTyperStyles();
  const currentValue = userInputWordList[currentWord]
    ? userInputWordList[currentWord].join("")
    : "";
  return (
    <TextField
      autoComplete="off"
      size="small"
      fullWidth
      autoFocus
      id="typingInput"
      label="Type Here..."
      variant="outlined"
      className={classes.typingInput}
      onChange={handleTypingInputChange}
      value={currentValue}
    />
  );
};

export default Typer;
