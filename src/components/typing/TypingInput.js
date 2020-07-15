// React Imports
import React from "react";

// Redux Imports
import { useDispatch, useSelector } from "react-redux";

import {} from "../../selectors";
import {} from "../../actions";

// Material UI Imports
import { makeStyles } from "@material-ui/core/styles";
import { Paper, TextField, Typography } from "@material-ui/core";
import {} from "@material-ui/icons";

// Style Creator
const useTypingInputStyles = makeStyles((theme) => ({
  typingInput: {
    alignSelf: "center",
    margin: "auto",
    width: "50%",
  },
  typingPaper: {
    marginTop: "64px",
  },
}));

const TypingInput = ({}) => {
  const classes = useTypingInputStyles();
  const dispatch = useDispatch();
  console.log("yay");
  return (
    <>
      <div className={classes.typingInput} id="TypingInput">
        <Paper className={classes.typingPaper} variant="outlined" elevation={3}>
          <Typography variant="h6" align="center">
            Provost boatswain American Main driver poop deck crimp scurvy fore
            broadside gunwalls. Hempen halter yardarm skysail pressgang port
            bowsprit log mutiny Gold Road hail-shot. Heave down dead men tell no
            tales draught crimp holystone interloper rutters bounty loot
            topsail. Come about to go on account haul wind Davy Jones' Locker
            parrel heave to careen pillage flogging scuttle. Hornswaggle squiffy
            quarter poop deck dead men tell no tales cackle fruit reef sails lad
            dance the hempen jig fore. Me Sink me bilge booty red ensign wherry
            yo-ho-ho take a caulk execution dock hogshead. Knave Jolly Roger
            draught warp no prey, no pay fire ship hands fore blow the man down
            doubloon. Spirits Sea Legs lookout Spanish Main aft hardtack me
            galleon aye six pounders. Pink dead men tell no tales gabion hulk
            knave snow boatswain belaying pin gangplank ye.
          </Typography>
        </Paper>
      </div>
    </>
  );
};

export default TypingInput;
