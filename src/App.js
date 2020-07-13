import React from "react";
import { hot } from "react-hot-loader";
import Button from "@material-ui/core/Button";
import NavBar from "./navigation/NavBar";
import SideBar from "./navigation/SideBar";

const App = () => {
  return (
    <>
      <SideBar></SideBar>
      <NavBar></NavBar>
    </>
  );
};

export default hot(module)(App);
