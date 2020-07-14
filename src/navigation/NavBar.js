import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  IconButton,
} from "@material-ui/core";
import { useDispatch, useSelector } from "react-redux";
import {} from "../selectors";
import {} from "../actions";

const useStyles = makeStyles((theme) => ({
  appBar: {
    zIndex: theme.zIndex.drawer + 1,
  },
  title: {
    flexGrow: 1,
  },
}));

const NavBar = ({}) => {
  const classes = useStyles();
  const dispatch = useDispatch();
  return (
    <div>
      <AppBar className={classes.appBar} position="fixed">
        <Toolbar>
          <Typography variant="h6" className={classes.title}>
            {document.title}
          </Typography>
          <Button color="inherit">Login</Button>
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default NavBar;
