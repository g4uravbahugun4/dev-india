
const UserModel = require("../models/UserModel");
const express = require("express");
const router = express.Router();
const authMiddleware = require("../middleware/authMiddleware");

router.post("/update", authMiddleware, async (req, res) => {
    try {
      const { userId } = req;
       
   const {picUrl,info}=req.body
     
        const user = await UserModel.findById(userId);
        user.userimg = picUrl;
        user.master=info;
        await user.save();
  
  
      return res.status(200).send("Success");
    } catch (error) {
      console.error(error);
      return res.status(500).send("Server Error");
    }
  });
  

module.exports = router;