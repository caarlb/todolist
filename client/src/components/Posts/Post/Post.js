/* eslint-disable no-unused-vars */
import React from "react";
import {
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Button,
  Typography,
} from "@material-ui/core";
import DeleteIcon from "@material-ui/icons/Delete";
import MoreHorizIcon from "@material-ui/icons/MoreHoriz";

import useStyles from "./styles";

const Post = ({ post }) => {
  const classes = useStyles();

  return (
    <Card className={classes.card}>
      <CardMedia
        className={classes.media}
        image={post.selectedFile}
        title={post.title}
      />
      <div className={classes.overlay}>
        <Typography variant="h6">{post.tittle}</Typography>
      </div>
      <CardActions className={classes.cardActions}>
        <Button
          size="small"
          color="primary"
          onClick={() => {}}
        >
          <MoreHorizIcon fontSize="small" />Edit {post.likeCount}{" "}
        </Button>
        <Button
          size="small"
          color="primary"
          onClick={() => {}}
        >
          <DeleteIcon fontSize="small" /> Delete
        </Button>
      </CardActions>

      {/* 
      <div className={classes.overlay2}>
        <Button style={{color:'white'}} size="small" onClick={() => {}}>
            <MoreHorizIcon fontSize="default" />
        </Button>
      </div> */}
    </Card>
  );
};

export default Post;
