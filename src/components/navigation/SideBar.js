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
import { Mail, EmojiEvents } from "@material-ui/icons";

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
  //Styles
  const classes = useSideBarStyles();
  const theme = useTheme();
  //Dispatch
  const dispatch = useDispatch();
  const changeIsSidebarOpen = () =>
    isSizeSmall ? dispatch(toggleSidebar(false)) : null;
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
          onClick={changeIsSidebarOpen}
          onKeyDown={changeIsSidebarOpen}
          classes={{
            paper: classes.drawerPaper,
          }}
        >
          {isSizeSmall ? null : <Toolbar />}
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
      </div>
    </>
  );
};

export default SideBar;
