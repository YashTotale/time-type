// React Imports
import React, { useEffect } from "react";
import TyperWord from "./TyperWord";
import TyperInput from "./TyperInput";

// Redux Imports
import { useDispatch, useSelector } from "react-redux";
import {
  getWordList,
  getCurrentWord,
  getDifficulty,
  getIsTyperLoading,
  getIsTyperError,
} from "../../selectors";
import {} from "../../actions";
import { getWords } from "../../thunks";

// Material UI Imports
import { makeStyles } from "@material-ui/core/styles";
import { Paper, Tabs, Tab } from "@material-ui/core";
import { Skeleton } from "@material-ui/lab";
import {} from "@material-ui/icons";
import TyperTabs from "./TyperTabs";

const useTyperStyles = makeStyles((theme) => ({
  typer: {
    alignSelf: "center",
    margin: "auto",
    minWidth: "50%",
    maxWidth: "960px",
  },
  typerPaper: {
    marginTop: "64px",
  },
  typerTabs: {
    width: "100%",
    display: "flex",
    justifyContent: "center",
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
    dispatch(getWords());
  }, []);
  //Styles
  const classes = useTyperStyles();
  //Dispatch
  const dispatch = useDispatch();
  //Variables
  const isLoading = useSelector(getIsTyperLoading);
  const isError = useSelector(getIsTyperError);
  const wordList = useSelector(getWordList);
  const currentWord = useSelector(getCurrentWord);
  return (
    <>
      <div className={classes.typer} id="typer">
        <Paper className={classes.typerPaper} variant="outlined" elevation={3}>
          <div className={classes.typerTabs}>
            {isLoading ? (
              <Skeleton variant="rect">
                <TyperTabs />
              </Skeleton>
            ) : (
              <TyperTabs />
            )}
          </div>
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
          {isLoading ? (
            <Skeleton width="100%" variant="rect">
              <TyperInput />
            </Skeleton>
          ) : (
            <TyperInput currentWord={currentWord} />
          )}
        </Paper>
      </div>
    </>
  );
};

export default Typer;
