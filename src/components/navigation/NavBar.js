import React, { useRef, useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  IconButton,
  useTheme,
  useMediaQuery,
} from "@material-ui/core";
import { Menu, MenuOpen } from "@material-ui/icons";
import { useDispatch, useSelector } from "react-redux";
import { getIsSidebarOpen } from "../../selectors";
import { toggleSidebar } from "../../actions";

const useNavBarStyles = makeStyles((theme) => ({
  appBar: {
    zIndex: theme.zIndex.drawer + 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
}));

const NavBar = ({}) => {
  //Styles & Theme
  const classes = useNavBarStyles();
  const theme = useTheme();
  //Variables
  const isSizeSmall = useMediaQuery(theme.breakpoints.down("sm"));
  return (
    <div id="NavBar">
      <AppBar className={classes.appBar} position="fixed">
        <Toolbar>
          {isSizeSmall ? <MenuButton /> : null}
          <Title />
          <Button color="inherit">Login</Button>
        </Toolbar>
      </AppBar>
    </div>
  );
};

const MenuButton = () => {
  //Dispatch
  const dispatch = useDispatch();
  const changeIsSidebarOpen = () => dispatch(toggleSidebar(!isSidebarOpen));
  //Styles
  const classes = useNavBarStyles();
  //Variables
  const isSidebarOpen = useSelector(getIsSidebarOpen);
  return (
    <IconButton
      edge="start"
      className={classes.menuButton}
      color="inherit"
      aria-label="menu"
      onClick={changeIsSidebarOpen}
    >
      {isSidebarOpen ? <MenuOpen /> : <Menu />}
    </IconButton>
  );
};

const Title = () => {
  //Styles
  const classes = useNavBarStyles();
  return (
    <Typography variant="h6" className={classes.title}>
      {document.title}
    </Typography>
  );
};

export default NavBar;
