const TaskModel = require("@/models/TaskModel");
const UserModel = require("@/models/UserModel");
const express = require("express");
const router = express.Router();


router.post("/", async (req, res) => {
     const { userId } = req; 
     const {name,task,status,img,index,time}=req.body
  try {
 let user

 user = await TaskModel.find({user:userId})

 const exists =
user.some(status=> status.status === "completed"&&status.index===index);
if(exists){
  return res.status(404).send(" data already exist");
}
if(Date.now()<time){

  user = await TaskModel.findOne({index:index})
 
  user.status,
  user.time=Date.now(),
  user.a=img[0]
  user.b=img[1]
  user.c=img[2]
  user.d=img[3]
  user.e=img[4]
  user.f=img[5]
  user.g=img[6]
  user.h=img[7]
  user.i=img[8]
 await user.save();
  

}else{
 user = new TaskModel({
  user:userId,
  name,
  task,
  status,
  index,
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
const userpoints = await UserModel.findById(userId)
userpoints.points=point[index]
if(time!="0"){
  let days = 7;
let newDate = new Date(Date.now()+days*24*60*60*1000);
userpoints.time.push({index,time:newDate})
}
await userpoints.save()
  } catch (error) {
    console.error(error);
    return res.status(500).send(`Server error`);
  }
});


router.get("/", authMiddleware,async (req, res) => {
    try {
      const { userId } = req; 
      let { getFollowingData } = req.query;
      getFollowingData = JSON.parse(getFollowingData);
    
      const user = await TaskModel.find({user:userId})
        
      if (!user) {
        return res.status(404).send("no data found");
      }
      let post
     if(getFollowingData==="mapping")
     {
       post =
      user.filter(status=> status.status === "completed"&&status.name==="mapping");

     }
     else
     if(getFollowingData==="cleaning")
     {
     post =
      user.filter(status=> status.status === "completed"&&status.name==="cleaning");

     } else
     if(getFollowingData==="planting")
     {
      post =
      user.filter(status=> status.status === "completed"&&status.name==="planting");

     }
         

     
      return res.json(post);
    } catch (error) {
      console.error(error);
      return res.status(500).send(`Server error`);
    }
  });

 


module.exports = router;
