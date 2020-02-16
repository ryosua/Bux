import React, { useState } from "react";
import {
  Button,
  Card,
  Typography,
  CardContent,
  CardHeader,
  CardMedia,
  Avatar
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import AvB from "../../ui/AvB.jpeg";
import MoreHorizIcon from "@material-ui/icons/MoreHoriz";

const useStyles = makeStyles({
  root: {
    background: "grey",
    border: 0,
    borderRadius: 3,
    color: "white",
    width: 330,
    padding: "0 30px",
    margin: "10px",
    borderRadius: "5px"
  },
  media: {
    height: 0,
    paddingTop: "56.25%"
  },
  optionImg: {
    height: "200px"
  },
  bullet: {
    display: "inline-block",
    margin: "0 2px",
    transform: "scale(0.8)"
  },
  title: {
    fontSize: 14
  },
  pos: {
    marginBottom: 12
  },
  form: {
    display: "flex",
    flexDirection: "column"
  },
  imgs: {
    border: "2px solid white",
    minWidth: "200px",
    minHeight: "200px"
  },
  fade: {
    opacity: ".3"
  },
  typeCards: {
    display: "flex",
    flexFlow: "row no-wrap",
    justifyContent: "space-between",
    overflow: "scroll",
    padding: "10px"
  }
});

export default function TestForm() {
  const classes = useStyles();
  let [editMode, toEditMode] = useState(true);

  const handleSubmit = e => {
    e.preventDefault();
  };

  return (
    <form onSubmit={e => handleSubmit(e)} className={classes.form}>
      <div>
        <h2>1. What type of UX test do you want to create?</h2>
        <div className={classes.typeCards}>
          <Card className={classes.root}>
            <CardHeader
              title="Preference Test"
              subheader="2 images, head to head"
            />
            <CardMedia
              className={classes.media}
              image={AvB}
              title="2 images, head to head"
            />
            <CardContent>
              <Typography variant="body2" color="textSecondary" component="p">
                Cost: 3 Tokens
              </Typography>
              <Button>Create Test</Button>
            </CardContent>
          </Card>
          <Card className={[classes.root, classes.fade]}>
            <CardHeader title="Survey" subheader="Ask your user questions" />
            <CardMedia
              className={classes.media}
              image={MoreHorizIcon}
              title="Coming Soon"
            />
            <CardContent>
              <Typography variant="body2" color="textSecondary" component="p">
                Coming Soon
              </Typography>
              <Button disabled>Create Test</Button>
            </CardContent>
          </Card>
          <Card className={[classes.root, classes.fade]}>
            <CardHeader
              title="User Interview"
              subheader="1-on-1 conversations"
            />
            <CardMedia
              className={classes.media}
              image={MoreHorizIcon}
              title="1-on-1 conversations"
            />
            <CardContent>
              <Typography variant="body2" color="textSecondary" component="p">
                Coming Soon
              </Typography>
              <Button disabled>Create Test</Button>
            </CardContent>
          </Card>
          <Card className={[classes.root, classes.fade]}>
            <CardHeader
              title="Comprehension"
              subheader="Test what users understand"
            />
            <CardMedia
              className={classes.media}
              image={MoreHorizIcon}
              title="Test what users understand"
            />
            <CardContent>
              <Typography variant="body2" color="textSecondary" component="p">
                Coming Soon
              </Typography>
              <Button disabled>Create Test</Button>
            </CardContent>
          </Card>

          {/* <Button  disabled variant="contained">Survey</Button>
      <Button disabled  variant="contained">Usability</Button>

        <label>Set Bounty</label>
        <TextField
          variant="outlined"
          required
          label="Number"
          type="number"
          InputLabelProps={{
            shrink: true
          }}
        />{" "} */}
        </div>
      </div>
    </form>
    // ) : (
    //   <div>
    //     <img />
    //     <img />
    //     <Button>Publish</Button>
    //     <Button
    //       className={classes.root}
    //       variant="contained"
    //       onClick={() => toEditMode(true)}
    //     >
    //       Edit
    //     </Button>{" "}
    //   </div>
  );
}
