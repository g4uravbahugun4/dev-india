const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const PostSchema = new Schema(
  {
    user: { type: Schema.Types.ObjectId, ref: "User" },

    name: { type: String, required: true },
    task:{type:Boolean},
    rookies:{type:Boolean,default: true},

    traine:{type:Boolean,default:false},
    elite:{type:Boolean,default:false},

    core:{type:Boolean,default:false},

    dev:{type:Boolean,default:false},
   
    text: { type: String, required: true },

    picUrl:[String],

    likes: [{ user: { type: Schema.Types.ObjectId, ref: "User" } }],

   
  },
  { timestamps: true }
);

module.exports = mongoose.model("Post", PostSchema);
