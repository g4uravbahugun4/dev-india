const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const GroupSchema = new Schema(
  {
    admin:[ { type: Schema.Types.ObjectId, ref: "User" }],
    members:[ { type: Schema.Types.ObjectId, ref: "User" }],
    pincode:{type: String, required: true },
    chats: [
        {
              msg: { type: String, required: true },
              sender: { type: Schema.Types.ObjectId, ref: "User", required: true },
              date: { type: Date },
             audiourl:{type: String},
             imgurl:{type: String}
        }
      ]

   
    
  },
  { timestamps: true }
);

module.exports = mongoose.model("Group", GroupSchema);
