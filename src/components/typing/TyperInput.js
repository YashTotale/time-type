// React Imports
import React, { useState } from "react";

// Redux Imports
import { useDispatch, useSelector } from "react-redux";

import {} from "../../selectors";
import { handleInputChange } from "../../actions";

// Material UI Imports
import { makeStyles } from "@material-ui/core/styles";
import { TextField } from "@material-ui/core";
import {} from "@material-ui/icons";

const useTyperInputStyles = makeStyles((theme) => ({
  typingInput: {
    "& .MuiOutlinedInput-root": {
      "& input": {
        textAlign: "center",
      },
    },
  },
}));

const TyperInput = ({}) => {
  //Styles
  const classes = useTyperInputStyles();
  //Dispatch
  const dispatch = useDispatch();
  //Variables
  const [inputValue, setInputValue] = useState("");
  //Functions
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

export default TyperInput;
