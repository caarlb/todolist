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

import useStyles from "./styles";

const Post = ({ post, setCurrentId }) => {
  const classes = useStyles();

  return (
    <Card className={classes.card}>
      <ListItemIcon>
        <Checkbox />
        <div className={classes.List}>
          <Typography variant="h5">{post.title}</Typography>
        </div>
        <CardActions className={classes.cardActions}>
          <Button size="small" color="primary" onClick={() => {}}>
            <MoreHorizIcon fontSize="small" /> Edit
          </Button>
          <Button size="small" color="primary" onClick={() => {}}>
            <DeleteIcon fontSize="small" /> Delete
          </Button>
        </CardActions>
      </ListItemIcon>
    </Card>
  );
};

export default Post;
