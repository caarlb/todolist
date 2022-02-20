import mongoose from "mongoose";

const postSchema = mongoose.Schema({
  title: String,
  done: {
    type: Boolean,
    default: false,
  },
});

const PostMessage = mongoose.model("PostMessage", postSchema);

export default PostMessage;
