const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const Task = new Schema({
  user: { type: Schema.Types.ObjectId, ref: "User" },
  name:{type:String},
  task:{type:String},
  status:{type:String},
  index:{type:Number},
  time:{type:Date},
  a:{type:String},
  b:{type:String},
  c:{type:String},
  d:{type:String},
  e:{type:String},
  f:{type:String},
  g:{type:String},
  h:{type:String},
  i:{type:String},
  updated:[{
    a:{type:String},
    b:{type:String},
    c:{type:String},
    d:{type:String},
    e:{type:String},
    f:{type:String},
    g:{type:String},
    h:{type:String},
    i:{type:String},
  }]
 
},
{ timestamps: true }
);

module.exports = mongoose.model("TaskSchema ",Task );
