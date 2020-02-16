import React from "react";
import Typography from "@material-ui/core/Typography";
import TextField from "@material-ui/core/TextField";

import LinkButton from "../../components/LinkButton";

export default function() {
  return (
    <>
      <Typography variant="h2">Preference Test</Typography>
      <Typography>Which option do you prefer?</Typography>
      <TextField />
      <Typography>Why did you select that option?</Typography>
      <TextField />
      <LinkButton text="Submit" to="/success" />
    </>
  );
}
