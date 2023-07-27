const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const UserSchema = new Schema(
  {

  
    email: { type: String, required: true, unique: true },
 
     name: { type: String, required: true },
     rookies:{type:Boolean,default: true},

     traine:{type:Boolean,default:false},
     elite:{type:Boolean,default:false},

     core:{type:Boolean,default:false},

     dev:{type:Boolean,default:false},
    
    
     time:[{
      completed:{type:Boolean,default:false},
      index:{type:Number},
      time:{type:Date}
     }],
  
  
  

    points:{   type:Number, default:0 },
    userimg:{type: String},
   
    
  },
  { timestamps: true }
);

module.exports = mongoose.model("User", UserSchema);
