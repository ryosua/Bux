import React from "react";
import { withRouter } from "react-router";
import Button from "@material-ui/core/Button";

const LinkButton = ({ to, text, history, onClick }) => {
  return (
    <div>
      <Button
        color="primary"
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
