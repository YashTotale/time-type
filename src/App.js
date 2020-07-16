import React, { useEffect } from "react";
import { hot } from "react-hot-loader";
import NavBar from "./components/navigation/NavBar";
import SideBar from "./components/navigation/SideBar";
import { makeStyles } from "@material-ui/core";
import TypingInput from "./components/typing/Typer";

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
      <TypingInput></TypingInput>
    </div>
  );
};

export default hot(module)(App);
