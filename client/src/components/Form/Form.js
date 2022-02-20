import React, { useState } from "react";
import { TextField, Button, Typography, Paper } from "@material-ui/core";
import { useDispatch } from "react-redux";

import useStyles from "./styles";
import { createPost } from "../../actions/posts";

const Form = () => {
  const [postData, setPostData] = useState({
    title: "",
  });

  const classes = useStyles();
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();

    dispatch(createPost(postData));
  };

  const clear = () => {};

  return (
    <Paper className={classes.paper}>
      <form
        autoComplete="off"
        noValidate
        className={`${classes.root} ${classes.form}`}
        onSubmit={handleSubmit}
      >
        <Typography variant="h6">Add new task</Typography>
        <TextField
          name="title"
          variant="outlined"
          label="Describe your task"
          fullWidth
          value={postData.title}
          onChange={(e) => setPostData({ ...postData, title: e.target.value })}
        />

        <Button
          className={classes.buttonSubmit}
          variant="contained"
          color="primary"
          size="large"
          type="submit"
          fullWidth
        >
          Create
        </Button>
        <Button
          variant="contained"
          color="secondary"
          size="small"
          onClick={clear}
          fullWidth
        >
          Clear
        </Button>
      </form>
    </Paper>
  );
};

export default Form;
