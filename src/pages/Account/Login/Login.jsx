import React from "react";
import Box from "@material-ui/core/Box";
import TextField from "@material-ui/core/TextField";
import Typography from "@material-ui/core/Typography";

import LinkButton from "../../../components/LinkButton";

const Login = ({ setLoggedIn }) => {
  return (
    <Box display="flex" flex={1} flexDirection="column">
      <Typography>Log in to your Bux account</Typography>
      <TextField label="Email Address" />
      <TextField label="Password" />
      <LinkButton text="Log In" onClick={() => setLoggedIn(true)} to="/test" />
    </Box>
  );
};

export default Login;
