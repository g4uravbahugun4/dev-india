const express = require("express");
const router = express.Router();
const UserModel = require("../models/UserModel");
const jwt = require("jsonwebtoken");
const authMiddleware = require("../middleware/authMiddleware");
const { OAuth2Client } = require('google-auth-library');
const Razorpay=require("razorpay")

router.post("/create-order", async (req, res) => {
    // const { userId } = req;
    const { amount } = req.body.payment_info;
 
    let options = {
        amount: amount,  
        currency: "INR",
      
     
    };
    const instance = new Razorpay({
        key_id: 'rzp_test_l1w2TZvd5ER58a',
        key_secret: 'HreN7iLoQBPWl8kuLdaePsmh',
    });

   
    try {
        instance.orders.create(options, function (err, order) {
            if(err){
                console.log("error",err)
            }
            console.log(order);
            return res.json(order);
        });
    } catch (error) {
        console.error("error",error);
        return res.status(500).send(`Server error`);
    }
});


router.post('/checkout',async(req,res)=>{
    const { razorpay_payment_id } = req.body;
  
 
    const instance = new Razorpay({
        key_id: 'rzp_test_l1w2TZvd5ER58a',
        key_secret: 'HreN7iLoQBPWl8kuLdaePsmh',
    });


    try {
       const order=await instance.payments.fetch(razorpay_payment_id)
       if(!order){
        return res.status(500).send("some error occoured")
       }
       res.status(200).json({data:order})
    } catch (error) {
        console.error("error", error);
        return res.status(500).send(`Server error`);
    }
});

module.exports = router;