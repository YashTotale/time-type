import React, { useEffect } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { hot } from "react-hot-loader";
import NavBar from "./components/navigation/NavBar";
import SideBar from "./components/navigation/SideBar";
import { makeStyles, IconButton } from "@material-ui/core";
import Typer from "./components/typing/Typer";
import { useFirebase } from "react-redux-firebase";
import Login from "./components/login/Login";

const useAppStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    width: "100%",
    height: "100%",
  },
}));

const App = () => {
  const classes = useAppStyles();
  return (
    <div className={classes.root}>
      <Router>
        <NavBar></NavBar>
        <SideBar></SideBar>
        <Switch>
          <Route path="/leaderboards"></Route>
          <Route path="/login">
            <Login />
          </Route>
          <Route path="/">
            <Typer />
          </Route>
        </Switch>
      </Router>
    </div>
  );
};

export default hot(module)(App);
