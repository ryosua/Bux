import React from "react";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import TextField from "@material-ui/core/TextField";

export default function() {
  return (
    <>
      <Typography variant="h2">Preference Test</Typography>
      <Typography>Which option do you prefer?</Typography>
      <TextField />
      <Typography>Why did you select that option?</Typography>
      <TextField />
      <Button>Submit</Button>
    </>
  );
}
