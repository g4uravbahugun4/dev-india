const TaskModel = require("../models/TaskModel");
const UserModel = require("../models/UserModel");
const express = require("express");
const router = express.Router();
const authMiddleware = require("../middleware/authMiddleware");

router.post("/", authMiddleware, async (req, res) => {
     const { userId } = req; 
     const {task,status,img,index,time,
    }=req.body
  try {
 let user
console.log("my friends")
 user = await TaskModel.find({user:userId})

 const exists =
user.some(status=> status.status === "complete"&&status.index===index);

if(exists){
  return res.status(401).send(" data already exist");
}
const userpoints = await UserModel.findById(userId)

if(Date.now()<time||exists){

  user = await TaskModel.findOne({user:userId})
  const exists =
  user.filter(status=> status.status === "completed"&&status.index===index);
  exists.status,
 
  exists.time=Date.now(),
  exists.a=img[0]
  exists.b=img[1]
  exists.c=img[2]
  exists.d=img[3]
  exists.e=img[4]
  exists.f=img[5]
  exists.g=img[6]
  exists.h=img[7]
  exists.i=img[8]
 await user.save();
  

}else{
 user = new TaskModel({
  user:userId,
  name:userpoints.name,
  task,
  status,
  index,
  userpicUrl:userpoints.userimg,
  rookies:userpoints.rookies,
  traine:userpoints.traine,
  elite:userpoints.elite,
  core:userpoints.core,
  dev:userpoints.dev,
  time:Date.now(),
  a:img[0],
  b:img[1],
  c:img[2],
  d:img[3],
  e:img[4],
  f:img[5],
  g:img[6],
  h:img[7],
  i:img[8],
  
 }); 

  await user.save();
}

let point=[1,2,4,5,6,7,8,9,0,10]

userpoints.points=point[index]
if(time!="0"){
  let days = 7;
let newDate = new Date(Date.now()+days*24*60*60*1000);
userpoints.time.push({index:index,time:newDate})
}else{
userpoints.time.push({completed:true,index:index})}
await userpoints.save();

  } catch (error) {
    console.error(error);
    return res.status(500).send(`Server error`);
  }
});


router.get("/", authMiddleware,async (req, res) => {
    try {
      const { userId } = req; 
      let { getFollowingData } = req.query;
   
    console.log(getFollowingData)
      const user = await TaskModel.find({user:userId})
        
      if (!user) {
        return res.status(404).send("no data found");
      }
      let post
     if(getFollowingData==="mapping")
     {
       post =
      user.filter(status=> status.status === "completed"&&status.task==="mapping");

     }
     else
     if(getFollowingData==="cleaning")
     {
     post =
      user.filter(status=> status.task==="cleaning");

     } else
     if(getFollowingData==="planting")
     {
      post =
      user.filter(status=> status.status === "completed"&&status.task==="planting");

     }
         

     
      return res.json(post);
    } catch (error) {
      console.error(error);
      return res.status(500).send(`Server error`);
    }
  });
  router.get("/post", authMiddleware,async (req, res) => {
    try {
    
      const user = await TaskModel.find()
         
 
      return res.json(user);
    } catch (error) {
      console.error(error);
      return res.status(500).send(`Server error`);
    }
  });
 


module.exports = router;
