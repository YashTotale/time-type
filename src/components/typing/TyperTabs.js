// React Imports
import React from "react";

// Redux Imports
import { useDispatch, useSelector } from "react-redux";

import { getDifficulty } from "../../selectors";
import { setNewDifficulty } from "../../actions";

// Material UI Imports
import { makeStyles } from "@material-ui/core/styles";
import { Tabs, Tab } from "@material-ui/core";
import {} from "@material-ui/icons";

const useTyperTabsStyles = makeStyles((theme) => ({
  // Styles
}));

const TyperTabs = ({}) => {
  // Styles
  const classes = useTyperTabsStyles();
  // Dispatch
  const dispatch = useDispatch();
  const newDifficulty = (event, newValue) =>
    dispatch(setNewDifficulty(newValue));
  // Variables
  const difficulty = useSelector(getDifficulty);
  return (
    <>
      <Tabs value={difficulty} onChange={newDifficulty} centered>
        <Tab label="Easy"></Tab>
        <Tab label="Medium"></Tab>
        <Tab label="Hard"></Tab>
      </Tabs>
    </>
  );
};

export default TyperTabs;
