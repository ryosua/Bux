import React from "react";

import { Link as RouterLink } from "react-router-dom";
import Button from "@material-ui/core/Button";

const LinkButton = ({ to, text }) => {
  const LinkBehavior = React.forwardRef((props, ref) => (
    <RouterLink ref={ref} to={to} {...props} />
  ));

  return (
    <div>
      <Button color="primary" component={LinkBehavior}>
        {text}
      </Button>
    </div>
  );
};

export default LinkButton;
