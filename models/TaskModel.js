const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const Task = new Schema({
  user: { type: Schema.Types.ObjectId, ref: "User" },
  name:{type:String},
  
  name: { type: String, required: true },
  rookies:{type:Boolean,default: true},

  traine:{type:Boolean,default:false},
  elite:{type:Boolean,default:false},

  core:{type:Boolean,default:false},

  dev:{type:Boolean,default:false},
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
