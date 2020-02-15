import React from "react";
import Box from "@material-ui/core/Box";
import Typography from "@material-ui/core/Typography";
import ArrowDownwardIcon from "@material-ui/icons/ArrowDownward";
import CreateIcon from "@material-ui/icons/Create";
import AssignmentIcon from "@material-ui/icons/Assignment";

import LinkButton from "../../components/LinkButton";

import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
  header: {
    height: "600px"
  },
  box1: {
    backgroundColor: "#17257c",
    width: "700px",
    height: "200px",
    padding: "5px"
  },
  box2: {
    backgroundColor: "#230933",
    width: "700px",
    height: "200px",
    padding: "5px"
  },
  actionIcons: {
    height: "60px",
    width: "60px",
    border: "3px solid #FFF",
    padding: "25px",
    marginTop: "15px",
    borderRadius: "50em"
  },
  actions: {
    borderTop: "5px solid #FFF"
  }
});

const Home = () => {
  const classes = useStyles();

  return (
    <>
      <Box className={classes.header}>
        <Typography variant="h1">BUX</Typography>
        <Typography variant="h2">Take a user test. Earn bux.</Typography>
        <Typography>GET STARTED</Typography>
        <ArrowDownwardIcon />
      </Box>
      <Box display="flex" flex={1} className={classes.actions}>
        <Box className={classes.box1}>
          <AssignmentIcon className={classes.actionIcons} />
          <LinkButton text="Take a test" to="/account" />
          <Typography>Earn credits for every test you complete</Typography>
        </Box>
        <Box className={classes.box2}>
          <CreateIcon className={classes.actionIcons} />
          <LinkButton text="Create a test" to="/createTest" />
          <Typography>Get feedback on your product</Typography>
        </Box>
      </Box>
    </>
  );
};

export default Home;
