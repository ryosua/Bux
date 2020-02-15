import React from "react";
import { withRouter } from "react-router";
import Button from "@material-ui/core/Button";

const LinkButton = ({ to, text, history }) => {
  return (
    <div>
      <Button color="primary" onClick={() => history.push(to)}>
        {text}
      </Button>
    </div>
  );
};

export default withRouter(LinkButton);
