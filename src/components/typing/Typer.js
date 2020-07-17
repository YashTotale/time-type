// React Imports
import React, { useState } from "react";
import Word from "./Word";
import TyperInput from "./TyperInput";

// Redux Imports
import { useDispatch, useSelector } from "react-redux";

import { getWordList, getCurrentWord, getDifficulty } from "../../selectors";
import {
  setWordList,
  handleInputChange,
  setNewDifficulty,
} from "../../actions";

// Material UI Imports
import { makeStyles } from "@material-ui/core/styles";
import { Paper, TextField, Tabs, Tab } from "@material-ui/core";
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
  words: {
    margin: "0px 10px 10px",
    display: "flex",
    flexWrap: "wrap",
  },
}));

const Typer = ({}) => {
  //Dispatch
  const dispatch = useDispatch();
  const newDifficulty = (event, newValue) =>
    dispatch(setNewDifficulty(newValue));
  //Styles
  const classes = useTyperStyles();
  //Variables
  const wordList = useSelector(getWordList);
  const currentWord = useSelector(getCurrentWord);
  const difficulty = useSelector(getDifficulty);
  return (
    <>
      <div className={classes.typer} id="typer">
        <Paper className={classes.typingPaper} variant="outlined" elevation={3}>
          <Tabs value={difficulty} onChange={newDifficulty} centered>
            <Tab label="Easy"></Tab>
            <Tab label="Medium"></Tab>
            <Tab label="Hard"></Tab>
          </Tabs>
          <div className={classes.words}>
            {wordList.map((word, i) => {
              return (
                <Word key={i} word={word} currentWord={i === currentWord} />
              );
            })}
          </div>
          <TyperInput currentWord={currentWord} />
        </Paper>
      </div>
    </>
  );
};

export default Typer;
