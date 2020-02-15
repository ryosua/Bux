import React, { useState } from "react";
import { TextField, Button, Link } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
  root: {
    background: "green",
    border: 0,
    borderRadius: 3,
    color: "white",
    height: 48,
    padding: "0 30px"
  },
  form: {
    display: "flex",
    flexDirection: "column"
  },
  imgs: {
    border: "2px solid white",
    minWidth: "200px",
    minHeight: "200px"
  }
});

export default function TestForm() {
  const classes = useStyles();
  let [img1, setImg1] = useState("");
  let [img2, setImg2] = useState("");
  let [editMode, toEditMode] = useState(true);
  console.log(img1);
  console.log(img2);

  const handleSubmit = e => {
    e.preventDefault();
  };

  const handleImageChange = e => {
    e.preventDefault();

    let reader = new FileReader();
    let file = e.target.files[0];

    reader.onloadend = () => {
      setImg1(reader.result);
    };

    reader.readAsDataURL(file);
  };

  return editMode ? (
    <form onSubmit={e => handleSubmit(e)} className={classes.form}>
      <div>
        <TextField
          variant="outlined"
          required
          label="Number"
          type="number"
          InputLabelProps={{
            shrink: true
          }}
        />{" "}
      </div>
      <TextField
        variant="outlined"
        required
        label="Description"
        InputLabelProps={{
          shrink: true
        }}
      />
      <img alt="Image A" src={img1} className={classes.img} />
      <input type="file" value={img1} onChange={e => handleImageChange(e)} />
      <img alt="Image B" src={img2} className={classes.img} />
      <input
        type="file"
        value={img2}
        onChange={e => setImg2(e.target.files[0])}
      />
      <Button
        className={classes.root}
        variant="contained"
        onClick={() => toEditMode(false)}
      >
        Preview
      </Button>{" "}
    </form>
  ) : (
    <div>
      <img />
      <img />
      <Button>Publish</Button>
      <Button
        className={classes.root}
        variant="contained"
        onClick={() => toEditMode(true)}
      >
        Edit
      </Button>{" "}
    </div>
  );
}
