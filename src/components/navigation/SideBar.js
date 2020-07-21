// React Imports
import React from "react";

// Redux Imports
import { useDispatch, useSelector } from "react-redux";
import { getIsSidebarOpen } from "../../selectors";
import { toggleSidebar } from "../../actions";

// Material UI Imports
import { makeStyles } from "@material-ui/core/styles";
import {
  Drawer,
  List,
  ListItem,
  ListItemIcon,
  Divider,
  ListItemText,
  Toolbar,
  useMediaQuery,
  useTheme,
} from "@material-ui/core";
import { Mail, EmojiEvents, Home } from "@material-ui/icons";
import { Link } from "react-router-dom";

const useSideBarStyles = makeStyles((theme) => ({
  drawer: {
    width: 240,
    flexShrink: 0,
  },
  drawerPaper: {
    width: 240,
  },
  drawerContainer: {
    overflow: "auto",
  },
}));

const SideBar = ({}) => {
  //Styles
  const classes = useSideBarStyles();
  const theme = useTheme();
  //Dispatch
  const dispatch = useDispatch();
  const changeIsSidebarOpen = () => dispatch(toggleSidebar(false));
  //Variables
  const isSizeSmall = useMediaQuery(theme.breakpoints.down("sm"));
  const isSidebarOpen = useSelector(getIsSidebarOpen);
  return (
    <>
      <div id="SideBar">
        <Drawer
          className={classes.drawer}
          open={isSidebarOpen}
          variant={isSizeSmall ? "temporary" : "permanent"}
          onClick={isSizeSmall ? changeIsSidebarOpen : null}
          onKeyDown={isSizeSmall ? changeIsSidebarOpen : null}
          classes={{
            paper: classes.drawerPaper,
          }}
        >
          {isSizeSmall ? null : <Toolbar />}
          <SideBarContainer />
        </Drawer>
      </div>
    </>
  );
};

const SideBarContainer = ({}) => {
  //Styles
  const classes = useSideBarStyles();
  return (
    <div className={classes.drawerContainer}>
      <SideBarList
        listItems={[
          { text: "Home", icon: <Home />, to: "/" },
          { text: "Leaderboards", icon: <EmojiEvents />, to: "/leaderboards" },
        ]}
      />
      <Divider />
      <SideBarList listItems={[{ text: "Contact Us", icon: <Mail /> }]} />
    </div>
  );
};

const SideBarList = ({ listItems }) => {
  return (
    <List>
      {listItems.map((listItem, i) => {
        const { icon, text, to } = listItem;
        return (
          <ListItem component={Link} to={to} key={i} button>
            <ListItemIcon>{icon}</ListItemIcon>
            <ListItemText primary={text} />
          </ListItem>
        );
      })}
    </List>
  );
};

export default SideBar;
