// React Imports
import React from "react";

// Redux Imports
import { useDispatch, useSelector } from "react-redux";

import {} from "../../selectors";
import {} from "../../actions";

// Material UI Imports
import { makeStyles } from "@material-ui/core/styles";
import { Paper, TextField, Typography } from "@material-ui/core";
import {} from "@material-ui/icons";
import { getWords } from "../../words";

// Style Creator
const useTypingInputStyles = makeStyles((theme) => ({
  typingInput: {
    alignSelf: "center",
    margin: "auto",
    width: "50%",
  },
  typingPaper: {
    marginTop: "64px",
  },
}));

const TypingInput = ({}) => {
  const classes = useTypingInputStyles();
  const dispatch = useDispatch();
  const words = getWords(100);
  return (
    <>
      <div className={classes.typingInput} id="TypingInput">
        <Paper className={classes.typingPaper} variant="outlined" elevation={3}>
          <Typography variant="h6" align="center">
            {words}
          </Typography>
        </Paper>
      </div>
    </>
  );
};

export default TypingInput;
