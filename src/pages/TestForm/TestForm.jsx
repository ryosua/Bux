import React, { useState } from "react";
import {
  Button,
  Card,
  CardContent,
  CardHeader,
  CardMedia,
  FormControl,
  MenuItem,
  Select,
  Typography
} from "@material-ui/core";

import { makeStyles } from "@material-ui/core/styles";
import AvB from "../../ui/AvB.jpg";
import QA from "../../ui/QA.jpg";
import Interview from "../../ui/Interview.jpg";

const useStyles = makeStyles(theme => ({
  root: {
    backgroundColor: "#FFF",
    border: 0,
    width: 330,
    padding: "0 30px",
    margin: "15px",
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
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120
  },
  typeCards: {
    display: "flex",
    overflowX: "auto"
  },
  input: {
    display: "none"
  },
  select: {
    width: "200px",
    marginBottom: "10px"
  },
  upload: {
    margin: "20px"
  },
  details: {
    height: "250px"
  }
}));

export default function TestForm() {
  const classes = useStyles();
  let [editMode, toEditMode] = useState(false);
  let [tokens, setTokens] = useState(3);

  const handleChange = event => {
    setTokens(event.target.value);
  };

  const handleSubmit = e => {
    e.preventDefault();
    toEditMode(!editMode);
  };

  return (
    <div>
      <h2>1. What type of UX test do you want to create?</h2>
      <hr />
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
            <Button onClick={e => handleSubmit(e)}>Create Test</Button>
          </CardContent>
        </Card>
        <Card className={[classes.root, classes.fade]}>
          <CardHeader title="Survey" subheader="Ask your user questions" />
          <CardMedia className={classes.media} image={QA} title="Coming Soon" />
          <CardContent>
            <Typography variant="body2" color="textSecondary" component="p">
              Coming Soon
            </Typography>
            <Button disabled>Create Test</Button>
          </CardContent>
        </Card>
        <Card className={[classes.root, classes.fade]}>
          <CardHeader title="User Interview" subheader="1-on-1 conversations" />
          <CardMedia
            className={classes.media}
            image={Interview}
            title="1-on-1 conversations"
          />
          <CardContent>
            <Typography variant="body2" color="textSecondary" component="p">
              Coming Soon
            </Typography>
            <Button disabled>Create Test</Button>
          </CardContent>
        </Card>
      </div>
      {editMode && (
        <div className={classes.details}>
          <h2>2. Select images to test</h2>
          <hr />
          <input
            accept="image/*"
            className={classes.input}
            id="contained-button-file"
            multiple
            type="file"
          />
          <label className={classes.upload} htmlFor="contained-button-file">
            <Button variant="contained" color="primary" component="span">
              Upload
            </Button>
          </label>
          <label className={classes.upload} htmlFor="contained-button-file">
            <Button variant="contained" color="primary" component="span">
              Upload
            </Button>
          </label>
          <br />
        </div>
      )}
      {editMode && (
        <>
          <div className={classes.details}>
            <h2>3. Set token award</h2>
            <hr />
            <FormControl variant="outlined" className={classes.formControl}>
              <Select
                className={classes.select}
                value={tokens}
                onChange={handleChange}
              >
                <MenuItem value={1}>One</MenuItem>
                <MenuItem value={2}>Two</MenuItem>
                <MenuItem value={3}>Three</MenuItem>
              </Select>
            </FormControl>
          </div>
          <Button
            variant="contained"
            color="primary"
            component="span"
            onClick={e => handleSubmit(e)}
          >
            Cancel
          </Button>
          <Button
            variant="contained"
            color="primary"
            component="span"
            onClick={e => handleSubmit(e)}
          >
            Publish
          </Button>
        </>
      )}
    </div>
  );
}
