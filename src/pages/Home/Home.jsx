import React from "react";
import Box from "@material-ui/core/Box";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";

const Home = () => (
  <>
    <Typography variant="h1">Take a user test. Earn bux.</Typography>
    <Box display="flex" flex={1}>
      <Box>
        <Typography>for everyone</Typography>
        <Button>Take a test</Button>
      </Box>
      <Box>
        <Typography>for devs</Typography>
        <Button> Create a test</Button>
      </Box>
    </Box>
  </>
);

export default Home;
