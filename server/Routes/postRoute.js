const express = require("express");
const {
  addPost,
  allPost,
  getPost,
  fetchComments,
  addComments,
} = require("../Controllers/post");

const router = express.Router();

router.post("/addpost", addPost);
router.get("/allposts", allPost);
router.get("/:id", getPost);
router.get("/comments/:id", fetchComments);
router.post("/addcomment/:id", addComments);
module.exports = router;
