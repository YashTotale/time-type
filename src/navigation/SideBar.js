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
} from "@material-ui/core";
import { Inbox as InboxIcon, Mail as MailIcon } from "@material-ui/icons";

//Style Creator
const useSideBarStyles = makeStyles((theme) => ({
  list: {
    width: 250,
  },
}));

const SideBar = ({}) => {
  const classes = useSideBarStyles();
  const dispatch = useDispatch();
  const isSidebarOpen = useSelector(getIsSidebarOpen);
  const changeIsSidebarOpen = () => dispatch(toggleSidebar(false));
  return (
    <>
      <Drawer anchor="left" open={isSidebarOpen} onClose={changeIsSidebarOpen}>
        <div
          className={classes.list}
          role="presentation"
          onClick={changeIsSidebarOpen}
          onKeyDown={changeIsSidebarOpen}
        >
          <List>
            {["Inbox", "Starred", "Send email", "Drafts"].map((text, index) => (
              <ListItem button key={text}>
                <ListItemIcon>
                  {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
                </ListItemIcon>
                <ListItemText primary={text} />
              </ListItem>
            ))}
          </List>
          <Divider />
          <List>
            {["All mail", "Trash", "Spam"].map((text, index) => (
              <ListItem button key={text}>
                <ListItemIcon>
                  {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
                </ListItemIcon>
                <ListItemText primary={text} />
              </ListItem>
            ))}
          </List>
        </div>
      </Drawer>
    </>
  );
};

export default SideBar;
