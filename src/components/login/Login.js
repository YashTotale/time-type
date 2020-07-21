// React Imports
import React from "react";

// Redux Imports
import { useDispatch, useSelector } from "react-redux";

import {} from "../../selectors";
import {} from "../../actions";

// Material UI Imports
import { makeStyles } from "@material-ui/core/styles";
import {} from "@material-ui/core";
import {} from "@material-ui/icons";

const useLoginStyles = makeStyles((theme) => ({
  // Styles
}));

const Login = ({}) => {
  // Styles
  const classes = useLoginStyles();
  // Dispatch
  const dispatch = useDispatch();
  // Variables
  return (
    <>
      <h1 style={{ margin: "auto" }}>Hello</h1>
    </>
  );
};

export default Login;
