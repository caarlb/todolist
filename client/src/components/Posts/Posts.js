import React from "react";
import { CircularProgress, List, ListItem } from "@material-ui/core";
import { useSelector } from "react-redux";

import Post from "./Post/Post";
import useStyles from "./styles";

const Posts = ({ post, setCurrentId }) => {
  const posts = useSelector((state) => state.posts);
  
  const classes = useStyles();

  return !posts.length ? (
    <CircularProgress />
  ) : (
    <List className={classes.container}>
      {posts.map((post) => (
        <ListItem key={post._id}>
          <Post post={post} setCurrentId={setCurrentId} />
        </ListItem>
      ))}
    </List>
  );
};

export default Posts;
