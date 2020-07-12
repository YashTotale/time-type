import React from "react";
import { hot } from "react-hot-loader";
import Button from "@material-ui/core/Button";

interface App {}

const App = () => {
  return (
    <Button variant="contained" color="primary">
      Hello World
    </Button>
  );
};

export default hot(module)(App);
