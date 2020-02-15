import React, { useState } from "react";
import { TextField, Button } from "@material-ui/core";
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
  let [editMode, toEditMode] = useState(true);

  const handleSubmit = e => {
    e.preventDefault();
  };

  return editMode ? (
    <form onSubmit={e => handleSubmit(e)} className={classes.form}>
      <div>
        <label>Set Bounty</label>
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
        id="outlined-multiline-static"
        label="Multiline"
        multiline
        rows="4"
        defaultValue="Description"
        variant="outlined"
      />
      <input type="file" />
      <input type="file" />
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
