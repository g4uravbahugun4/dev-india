const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const PostSchema = new Schema(
  {
    user: { type: Schema.Types.ObjectId, ref: "User" },

   
    text: { type: String, required: true },

    picUrl:[String],

    likes: [{ user: { type: Schema.Types.ObjectId, ref: "User" } }],

   
  },
  { timestamps: true }
);

module.exports = mongoose.model("Post", PostSchema);
