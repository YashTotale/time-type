// React Imports
import React from "react";
import _ from "lodash";

// Redux Imports
import { useDispatch, useSelector } from "react-redux";

import {} from "../../selectors";
import {} from "../../actions";

// Material UI Imports
import { makeStyles } from "@material-ui/core/styles";
import {} from "@material-ui/core";
import {} from "@material-ui/icons";

const useTyperWordStyles = makeStyles((theme) => ({
  word: (props) => ({
    color: "black",
    display: "flex",
    margin: "3px",
    fontSize: 28,
    lineHeight: 1.5,
  }),
  character: (props) => ({
    color: props.isCorrect ? "green" : props.isUnattempted ? "black" : "red",
    minWidth: "5px",
  }),
}));

const TyperWord = ({ word, currentWord }) => {
  //Styles
  const classes = useTyperWordStyles({ currentWord });
  return (
    <div className={classes.word}>
      {word.map((characterObject, i) => {
        return (
          <Character
            key={i}
            character={characterObject.char}
            userCharacter={characterObject.userChar}
          />
        );
      })}
    </div>
  );
};

const Character = ({ character, userCharacter }) => {
  //Variables
  const isUnattempted = _.isNull(userCharacter);
  const isWrong = userCharacter && userCharacter !== character;
  const isCorrect = userCharacter === character;
  //Styles
  const classes = useTyperWordStyles({ isCorrect, isWrong, isUnattempted });
  return <div className={classes.character}>{character}</div>;
};

export default TyperWord;
