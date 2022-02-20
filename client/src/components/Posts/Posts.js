import React from "react";
import { Grid, CircularProgress } from "@material-ui/core";
import { useSelector } from "react-redux";

import Post from "./Post/Post";
import useStyles from "./styles";

const Posts = () => {
  const posts = useSelector((state) => state.posts);
  // eslint-disable-next-line no-unused-vars
  const classes = useStyles();

  console.log(posts);

  return !posts.length ? (
    <CircularProgress />
  ) : (
    <Grid
      className={classes.container}
      container
      alignItems="stretch"
      spacing={1}
    >
      {posts.map((post) => (
        <Grid key={post._id} item sx={12} sm={6}>
          <Post post={post} />
        </Grid>
      ))}
    </Grid>
  );
};

export default Posts;
