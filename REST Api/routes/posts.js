const express = require("express");
const router = express.Router();
const Post = require("../models/Post");

router.get("/", async (req, res) => {
  try {
    const posts = await Post.find();
    res.json(posts);
  } catch (err) {
    res.json({ message: err });
  }
});

router.get("/:id", async (req, res) => {
  try {
    const post = await Post.findById(req.params.id);
    res.send(post);
  } catch (err) {
    res.json({ message: err });
  }
});

router.get("/bengaluru", (req, res) => {
  res.send("Hello Bengaluru!!");
});

router.post("/", async (req, res) => {
  const post = new Post({
    title: req.body.title,
    description: req.body.description
  });

  try {
    const savedPost = await post.save();
    res.json(savedPost);
  } catch (err) {
    res.json({ message: err });
  }
});

router.patch("/:id", async (req, res) => {
  try {
    const updatedPost = await Post.updateOne(
      { _id: req.params.id },
      { $set: { title: req.body.title } }
    );
    res.send(updatedPost);
  } catch (err) {
    res.send({ message: err });
  }
});

router.delete("/:id", async (req, res) => {
  try {
    const removedPost = await Post.remove({ _id: req.params.id });
    res.send(removedPost);
  } catch (err) {
    res.send({ message: err });
  }
});
module.exports = router;
