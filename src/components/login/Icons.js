// React Imports
import React, { useRef, useEffect } from "react";
// import { google, microsoft } from "../../icons";
import Google from "../../icons/google.png";
import Microsoft from "../../icons/microsoft.svg";

// Redux Imports
import { useDispatch, useSelector } from "react-redux";

import {} from "../../selectors";
import {} from "../../actions";

// Material UI Imports
import { makeStyles } from "@material-ui/core/styles";
import {} from "@material-ui/core";
import {} from "@material-ui/icons";

const useIconsStyles = makeStyles((theme) => ({
  iconDiv: {
    width: 100,
    height: 100,
  },
}));

const Icons = ({}) => {
  // Styles
  const classes = useIconsStyles();
  // Dispatch
  const dispatch = useDispatch();
  // Variables
  return (
    <>
      <Icon Icon={Google} />
      <Icon Icon={Microsoft} />
    </>
  );
};

const Icon = ({ Icon }) => {
  useEffect(() => {
    console.log(ref?.current);
  });
  const classes = useIconsStyles();
  const ref = useRef();
  let icon;
  if (typeof Icon === "string") {
    icon = <img ref={ref} src={Icon} />;
  } else {
    icon = <Icon />;
  }
  return <div className={classes.iconDiv}>{icon}</div>;
};

export default Icons;
