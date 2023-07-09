import { Schema, model, models } from "mongoose";

const postSchema = new Schema(
  {
    title: {
      type: String,
      required: true,
    },
    desc: {
      type: String,
      required: true,
    },
    img: {
      type: String,
      required: true,
    },
    content: {
      type: String,
      required: true,
    },
    username: {
      type: String,
      required: true,
    },
    userImage: {
      type: String,
      required: false,
    },
  },
  { timestamps: true }
);

export default models.Post || model("Post", postSchema);
