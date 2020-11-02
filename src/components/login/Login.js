// React Imports
import React from "react";

// Redux Imports
import { useDispatch, useSelector } from "react-redux";

import {} from "../../selectors";
import {} from "../../actions";

// Material UI Imports
import { makeStyles } from "@material-ui/core/styles";
import { Paper } from "@material-ui/core";
import {} from "@material-ui/icons";
import Icons from "./Icons";

const useLoginStyles = makeStyles((theme) => ({
  login: {
    margin: "auto",
  },
  loginPaper: {
    marginTop: "64px",
  },
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
      <div className={classes.login} id="login">
        <Paper className={classes.loginPaper}>
          <div style={{ margin: "auto" }}>
            <h1>Hello</h1>
            <Icons />
          </div>
        </Paper>
      </div>
    </>
  );
};

export default Login;
