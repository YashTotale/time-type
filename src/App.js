import React from "react";
import { hot } from "react-hot-loader";
import NavBar from "./navigation/NavBar";
import SideBar from "./navigation/SideBar";
import { makeStyles } from "@material-ui/core";

const useAppStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
  },
}));

const App = () => {
  const classes = useAppStyles();
  return (
    <div className={classes.root}>
      <NavBar></NavBar>
      <SideBar></SideBar>
    </div>
  );
};

export default hot(module)(App);
