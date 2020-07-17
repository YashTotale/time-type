//React Imports
import React from "react";

//Redux Imports
import { useDispatch, useSelector } from "react-redux";
import { getIsSidebarOpen } from "../../selectors";
import { toggleSidebar } from "../../actions";

//Material UI Imports
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
  //Styles
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
  //Styles
  const classes = useNavBarStyles();
  //Dispatch
  const dispatch = useDispatch();
  const changeIsSidebarOpen = () => dispatch(toggleSidebar(!isSidebarOpen));
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
