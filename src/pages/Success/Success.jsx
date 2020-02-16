import React from "react";
import Typography from "@material-ui/core/Typography";

import LinkButton from "../../components/LinkButton";

const Success = () => (
  <>
    <Typography variant="h2">Success! You earned 3 Bux</Typography>
    <Typography>Balance 3 Bux</Typography>
    <LinkButton text="Take Another Test" to="/test" />
    <LinkButton text="Home" to="/" />
  </>
);

export default Success;
