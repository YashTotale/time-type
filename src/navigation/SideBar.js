// React Imports
import React from "react";

// Redux Imports
import { useDispatch, useSelector } from "react-redux";

import { getIsSidebarOpen } from "../selectors";
import { toggleSidebar } from "../actions";

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
} from "@material-ui/core";
import { Inbox, Mail, EmojiEvents } from "@material-ui/icons";

const drawerWidth = 240;

//Style Creator
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
  const classes = useSideBarStyles();
  const dispatch = useDispatch();
  const isSidebarOpen = useSelector(getIsSidebarOpen);
  const changeIsSidebarOpen = () => dispatch(toggleSidebar(false));
  return (
    <>
      <Drawer
        className={classes.drawer}
        variant="permanent"
        classes={{
          paper: classes.drawerPaper,
        }}
      >
        <Toolbar />
        <div className={classes.drawerContainer}>
          <List>
            <ListItem button>
              <ListItemIcon>
                <EmojiEvents />
              </ListItemIcon>
              <ListItemText primary="Leaderboards" />
            </ListItem>
          </List>
          <Divider />
          <List>
            <ListItem button>
              <ListItemIcon>
                <Mail />
              </ListItemIcon>
              <ListItemText primary="Contact Us" />
            </ListItem>
          </List>
        </div>
      </Drawer>
    </>
  );
};

export default SideBar;
