// React Imports
import React, { useEffect, useState, useRef } from "react";

// Redux Imports
import { useDispatch, useSelector } from "react-redux";

import {
  getWordList,
  getCurrentWord,
  getCurrentCharacter,
} from "../../selectors";
import { setWordList, setCurrentWord } from "../../actions";

// Material UI Imports
import { makeStyles } from "@material-ui/core/styles";
import { Paper, TextField, Typography } from "@material-ui/core";
import {} from "@material-ui/icons";
import { setCurrentCharacter } from "../../actions/typerActions";

// Style Creator
const useTyperStyles = makeStyles((theme) => ({
  typer: {
    alignSelf: "center",
    margin: "auto",
    width: "50%",
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
    color: props.currentWord ? "red" : "black",
    display: "flex",
    margin: "3px",
    fontSize: 20,
    lineHeight: 1.5,
  }),
  character: {
    minWidth: "5px",
  },
}));

const Typer = ({}) => {
  //Styles
  const classes = useTyperStyles();
  //Dispatch
  const dispatch = useDispatch();
  const changeCurrentWord = (word) => dispatch(setCurrentWord(word));
  const changeCurrentCharacter = (character) =>
    dispatch(setCurrentCharacter(character));
  //Variables
  const wordList = useSelector(getWordList);
  const currentWord = useSelector(getCurrentWord);
  const currentCharacter = useSelector(getCurrentCharacter);
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
                  currentCharacter={currentCharacter}
                  currentWord={i === currentWord}
                />
              );
            })}
          </div>
          <TextField
            size="small"
            fullWidth
            autoFocus
            id="typingInput"
            label="Type Here..."
            variant="outlined"
            className={classes.typingInput}
          />
        </Paper>
      </div>
    </>
  );
};

const Word = ({ word, currentWord, currentCharacter }) => {
  const classes = useTyperStyles({ currentWord });
  return (
    <div className={classes.word}>
      {[...word].map((character, i) => {
        return (
          <Character
            key={i}
            currentCharacter={currentWord && i === currentCharacter}
            character={character}
          />
        );
      })}
      <Character character={" "} />
    </div>
  );
};

const Character = ({ character }) => {
  const classes = useTyperStyles();
  return <div className={classes.character}>{character}</div>;
};

export default Typer;
