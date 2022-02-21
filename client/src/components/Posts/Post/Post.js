/* eslint-disable no-unused-vars */
import React from "react";
import {
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Button,
  Typography,
  Checkbox,
} from "@material-ui/core";
import DeleteIcon from "@material-ui/icons/Delete";
import MoreHorizIcon from "@material-ui/icons/MoreHoriz";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import { useDispatch } from 'react-redux';

import useStyles from "./styles";

import { deletePost } from '../../../actions/posts';

const Post = ({ post, setCurrentId }) => {
  const dispatch = useDispatch();
  const classes = useStyles();

  return (
    <Card className={classes.container}>
      <ListItemIcon>
        <Checkbox />
        <div className={classes.List}>
          <Typography variant="h5">{post.title}</Typography>
        </div>
        <CardActions className={classes.cardActions}>
          <Button size="small" color="primary" onClick={() => setCurrentId(post._id)}>
            <MoreHorizIcon fontSize="small" /> Edit
          </Button>
          <Button size="small" color="primary" onClick={() =>  dispatch(deletePost(post._id))}>
            <DeleteIcon fontSize="small" /> Delete
          </Button>
        </CardActions>
      </ListItemIcon>
    </Card>
  );
};

export default Post;
