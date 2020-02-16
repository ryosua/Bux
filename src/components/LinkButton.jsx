import React from "react";
import { withRouter } from "react-router";
import Button from "@material-ui/core/Button";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
  button: {
    backgroundColor: "#FFF",
    width: "160px",
    margin: "5px",
    fontWeight: "550"
  }
});

const LinkButton = ({ to, text, history, onClick }) => {
  const classes = useStyles();
  return (
    <div>
      <Button
        className={classes.button}
        onClick={() => {
          onClick && onClick();
          history.push(to);
        }}
      >
        {text}
      </Button>
    </div>
  );
};

export default withRouter(LinkButton);
