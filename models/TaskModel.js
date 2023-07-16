const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const Task = new Schema({
  user: { type: Schema.Types.ObjectId, ref: "User" },
  name:{type:String},
  task:{type:String},
  status:{type:String},
  index:{type:Number},
  time:{type:Date},
  a:{type:String,default:null},
  b:{type:String,default:null},
  c:{type:String,default:null},
  d:{type:String,default:null},
  e:{type:String,default:null},
  f:{type:String,default:null},
  g:{type:String,default:null},
  h:{type:String,default:null},
  i:{type:String,default:null},
  updated:[{
    a:{type:String,default:null},
    b:{type:String,default:null},
    c:{type:String,default:null},
    d:{type:String,default:null},
    e:{type:String,default:null},
    f:{type:String,default:null},
    g:{type:String,default:null},
    h:{type:String,default:null},
    i:{type:String,default:null},
  }]
 
},
{ timestamps: true }
);

module.exports = mongoose.model("Task ",Task );
