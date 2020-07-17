// React Imports
import React, { useState } from "react";
import Word from "./Word";

// Redux Imports
import { useDispatch, useSelector } from "react-redux";

import { getWordList, getCurrentWord } from "../../selectors";
import { setWordList, handleInputChange } from "../../actions";

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
  typingInput: {
    "& .MuiOutlinedInput-root": {
      "& input": {
        textAlign: "center",
      },
    },
  },
  words: {
    margin: "0px 10px 10px",
    display: "flex",
    flexWrap: "wrap",
  },
}));

const Typer = ({}) => {
  //Styles
  const classes = useTyperStyles();
  //Variables
  const wordList = useSelector(getWordList);
  const currentWord = useSelector(getCurrentWord);
  return (
    <>
      <div className={classes.typer} id="typer">
        <Paper className={classes.typingPaper} variant="outlined" elevation={3}>
          {/* <Tabs centered>
            <Tab label="Easy"></Tab>
            <Tab label="Medium"></Tab>
            <Tab label="Hard"></Tab>
          </Tabs> */}
          <div className={classes.words}>
            {wordList.map((word, i) => {
              return (
                <Word key={i} word={word} currentWord={i === currentWord} />
              );
            })}
          </div>
          <TypingInput currentWord={currentWord} />
        </Paper>
      </div>
    </>
  );
};

const TypingInput = ({}) => {
  const classes = useTyperStyles();
  const dispatch = useDispatch();
  const [inputValue, setInputValue] = useState("");
  const handleInputValueChange = (e) => {
    if (e.target.value.slice(-1) === " ") {
      setInputValue("");
    } else {
      setInputValue(e.target.value);
    }
    dispatch(handleInputChange(e.target.value));
  };
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
      value={inputValue}
      onChange={handleInputValueChange}
    />
  );
};

export default Typer;
