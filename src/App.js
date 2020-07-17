import React, { useEffect } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { hot } from "react-hot-loader";
import NavBar from "./components/navigation/NavBar";
import SideBar from "./components/navigation/SideBar";
import { makeStyles } from "@material-ui/core";
import Typer from "./components/typing/Typer";
import words, { mapCharacters } from "./words";

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
      <NavBar></NavBar>
      <SideBar></SideBar>
      <Router>
        <Switch>
          <Route path="/leaderboards"></Route>
          <Route path="/">
            <Typer />
          </Route>
        </Switch>
      </Router>
    </div>
  );
};

export default hot(module)(App);
