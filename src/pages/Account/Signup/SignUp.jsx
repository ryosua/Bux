import React from "react";
import Box from "@material-ui/core/Box";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import Typography from "@material-ui/core/Typography";

import LinkButton from "../../../components/LinkButton";

const SignUp = ({ setLoggedIn, setHasAccount }) => {
  console.log("render signup");
  return (
    <Box display="flex" flex={1} flexDirection="column">
      <Typography>Create Your Bux account</Typography>
      <TextField label="Email Address" />
      <TextField label="Password" />
      <LinkButton text="SignUp" onClick={() => setLoggedIn(true)} to="/test" />
      <Box>
        <Typography>Already have an account?</Typography>
        <Button onClick={() => setHasAccount(true)}>Login</Button>
      </Box>
    </Box>
  );
};

export default SignUp;
