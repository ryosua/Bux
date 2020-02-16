import React from "react";
import Box from "@material-ui/core/Box";
import Typography from "@material-ui/core/Typography";
// import ArrowDownwardIcon from "@material-ui/icons/ArrowDownward";
import CreateIcon from "@material-ui/icons/Create";
import AssignmentIcon from "@material-ui/icons/Assignment";

import Logo from "../../ui/bux.svg";
import Background from "../../ui/bux-texture.jpg";
import Arrow from "../../ui/down-arrow.svg";

import LinkButton from "../../components/LinkButton";

import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
  header: {
    height: "600px",
    color: "#FFF",
    width: "100%",
    backgroundImage: `url(${Background})`,
    backgroundSize: "cover"
  },
  logo: {
    height: "140px",
    margin: "130px 0px 20px 0px"
  },
  boxLeft: {
    backgroundColor: "#17257c",
    width: "700px",
    height: "250px",
    padding: "10px"
  },
  boxRight: {
    backgroundColor: "#230933",
    width: "700px",
    height: "250px",
    padding: "10px"
  },
  actionIcons: {
    height: "60px",
    width: "60px",
    border: "3px solid #FFF",
    padding: "25px",
    margin: "25px 0px 15px 0px",
    borderRadius: "50em"
  },
  actions: {
    borderTop: "4px solid #FFF",
    color: "#FFF"
  },
  arrow: {
    height: "100px"
  },
  slogan: {
    color: "#00ccfb"
  }
});

const Home = () => {
  const classes = useStyles();

  return (
    <>
      <Box className={classes.header}>
        <img alt="Bux logo" src={Logo} className={classes.logo} />
        <Typography className={classes.slogan} variant="h3">
          Take a user test. Earn bux.
        </Typography>
        <img alt="Down arrow" src={Arrow} className={classes.arrow} />
        <Typography>GET STARTED</Typography>
      </Box>
      <Box display="flex" flex={1} className={classes.actions}>
        <Box className={classes.boxLeft}>
          <AssignmentIcon className={classes.actionIcons} />
          <LinkButton text="Take a test" to="/account" />
          <Typography>Earn credits for every test you complete</Typography>
        </Box>
        <Box className={classes.boxRight}>
          <CreateIcon className={classes.actionIcons} />
          <LinkButton text="Create a test" to="/wallet" />
          <Typography>Get feedback on your product</Typography>
        </Box>
      </Box>
    </>
  );
};

export default Home;
