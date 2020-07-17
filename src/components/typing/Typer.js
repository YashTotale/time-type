// React Imports
import React, { useEffect } from "react";
import TyperWord from "./TyperWord";
import TyperInput from "./TyperInput";

// Redux Imports
import { useDispatch, useSelector } from "react-redux";
import { getWordList, getCurrentWord, getDifficulty } from "../../selectors";
import {} from "../../actions";
import { getWordsRequest } from "../../thunks";

// Material UI Imports
import { makeStyles } from "@material-ui/core/styles";
import { Paper, Tabs, Tab } from "@material-ui/core";
import {} from "@material-ui/icons";
import TyperTabs from "./TyperTabs";

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
  //Effects
  useEffect(() => {
    dispatch(getWordsRequest());
  }, []);
  //Styles
  const classes = useTyperStyles();
  //Dispatch
  const dispatch = useDispatch();
  //Variables
  const wordList = useSelector(getWordList);
  const currentWord = useSelector(getCurrentWord);
  return (
    <>
      <div className={classes.typer} id="typer">
        <Paper className={classes.typingPaper} variant="outlined" elevation={3}>
          <TyperTabs />
          <div className={classes.words}>
            {wordList.map((word, i) => {
              return (
                <TyperWord
                  key={i}
                  word={word}
                  currentWord={i === currentWord}
                />
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
