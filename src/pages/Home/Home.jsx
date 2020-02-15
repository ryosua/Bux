import React from "react";
import Box from "@material-ui/core/Box";
import Typography from "@material-ui/core/Typography";

import LinkButton from "../../components/LinkButton";

const Home = () => (
  <>
    <Typography variant="h1">Take a user test. Earn bux.</Typography>
    <Box display="flex" flex={1}>
      <Box>
        <Typography>for everyone</Typography>
        <LinkButton text="Take a test" to="/account" />
      </Box>
      <Box>
        <Typography>for devs</Typography>
        <LinkButton text="Create a test" to="/account" />
      </Box>
    </Box>
  </>
);

export default Home;
