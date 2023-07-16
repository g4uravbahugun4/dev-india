const express = require("express");
const router = express.Router();
const authMiddleware = require("../middleware/authMiddleware");
const UserModel = require("../models/UserModel");


const uuid = require("uuid").v4;


// CREATE A POST

router.post("/", authMiddleware, async (req, res) => {
  const { text, picUrl } = req.body;

  if (text.length === 0)
    return res.status(401).send("Text must be atleast 1 character");

  try {
    const newPost = {
      user: req.userId,
      text
    };
   
    if (picUrl) newPost.picUrl = picUrl;

    const post = await new PostModel(newPost).save();

    return res.json(post);
  } catch (error) {
    console.error(error);
    return res.status(500).send(`Server error`);
  }
});

// GET ALL POSTS

router.get("/", authMiddleware, async (req, res) => {
  const { pageNumber } = req.query;

  try {
    const number = Number(pageNumber);
    const size = 8;
    const { userId } = req;

    const loggedUser = await FollowerModel.findOne({ user: userId })
    let posts = [];

    if (number === 1) {
      
        posts = await PostModel.find({ user: userId })
          .limit(size)
          .sort({ createdAt: -1 })
        
      
    }

    //
    else {
      const skips = size * (number - 1);

      
        posts = await PostModel.find({ user: userId })
          .skip(skips)
          .limit(size)
          .sort({ createdAt: -1 })
       
      
    }

    return res.json(posts);
  } catch (error) {
    console.error(error);
    return res.status(500).send(`Server error`);
  }
});

// GET POST BY ID

router.get("/:userId", authMiddleware, async (req, res) => {
  try {
    const post = await PostModel.findById(req.params.userId)
     

    if (!post) {
      return res.status(404).send("Post not found");
    }

    return res.json(post);
  } catch (error) {
    console.error(error);
    return res.status(500).send(`Server error`);
  }
});

// DELETE POST

router.delete("/:postId", authMiddleware, async (req, res) => {
  try {
    const { userId } = req;

    const { postId } = req.params;

    const post = await PostModel.findById(postId);
    if (!post) {
      return res.status(404).send("post not found");
    }

    const deletePost = async () => {
      await post.remove();
      return res.status(200).send("Post deleted Successfully");
    };

    if (post.user.toString() !== userId) {
      const user = await UserModel.findById(userId);
      if (user.role === "root") {
        await deletePost();
      } else {
        return res.status(401).send("Unauthorized");
      }
    }

    await deletePost();
  } catch (error) {
    console.error(error);
    return res.status(500).send(`Server error`);
  }
});

// LIKE A POST

router.post("/like/:postId", authMiddleware, async (req, res) => {
  try {
    const { postId } = req.params;
    const { userId } = req;

    const post = await PostModel.findById(postId);
    if (!post) {
      return res.status(404).send("No Post found");
    }

    const isLiked = post.likes.some(like => like.user.toString() === userId);

    if (isLiked) {
      return res.status(401).send("Post already liked");
    }

    post.likes.unshift({ user: userId });
    await post.save();


    return res.status(200).send("Post liked");
  } catch (error) {
    console.error(error);
    return res.status(500).send(`Server error`);
  }
});

// UNLIKE A POST

router.put("/unlike/:postId", authMiddleware, async (req, res) => {
  try {
    const { postId } = req.params;
    const { userId } = req;

    const post = await PostModel.findById(postId);
    if (!post) {
      return res.status(404).send("No Post found");
    }

    const isLiked = post.likes.some(like => like.user.toString() === userId);

    if (!isLiked) {
      return res.status(401).send("Post not liked before");
    }

    const index = post.likes.findIndex(like => like.user.toString() === userId);

    post.likes.splice(index, 1);

    await post.save();

  

    return res.status(200).send("Post Unliked");
  } catch (error) {
    console.error(error);
    return res.status(500).send(`Server error`);
  }
});