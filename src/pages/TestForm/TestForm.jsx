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
    margin: "30px"
  },
  details: {
    height: "250px"
  },
  proceed: {
    margin: "30px",
    marginTop: "-20px"
  }
}));

export default function TestForm() {
  const classes = useStyles();
  let [editMode, toEditMode] = useState(false);
  let [tokens, setTokens] = useState(3);
  let [images, setimg] = useState();

  console.log(images);
  console.log(tokens);

  const handleChange = event => {
    setTokens(event.target.value);
  };

  const handleSubmit = e => {
    e.preventDefault();
    toEditMode(!editMode);
  };

  const handlePost = e => {};

  const setImages = (e, number) => {
    e.preventDefault();
    const imageFiles = e.target.files;
    const filesLength = imageFiles.length;
    for (var i = 0; i < filesLength; i++) {
      let reader = new FileReader();
      let file = imageFiles[i];

      reader.onloadend = () => {
        setimg({ ...images, [`images${number}`]: reader.result });
      };
      reader.readAsDataURL(file);
    }
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
            id="contained-button-file1"
            multiple
            type="file"
            onChange={e => setImages(e, 1)}
          />
          <label className={classes.upload} htmlFor="contained-button-file1">
            <Button variant="contained" color="primary" component="span">
              Upload Image A
            </Button>
          </label>
          <input
            accept="image/*"
            className={classes.input}
            id="contained-button-file2"
            multiple
            type="file"
            onChange={e => setImages(e, 2)}
          />
          <label className={classes.upload} htmlFor="contained-button-file2">
            <Button variant="contained" color="primary" component="span">
              Upload Image B
            </Button>
          </label>
          <br />
        </div>
      )}
      {editMode && (
        <div>
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
            className={classes.proceed}
            onClick={e => handleSubmit(e)}
          >
            Cancel
          </Button>
          <Button
            variant="contained"
            color="primary"
            component="span"
            className={classes.proceed}
            onClick={e => handlePost(e)}
          >
            Publish
          </Button>
        </div>
      )}
    </div>
  );
}
