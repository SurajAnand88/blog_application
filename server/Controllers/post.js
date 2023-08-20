const db = require("../Helper/db.js");

const jwt = require("jsonwebtoken");
//Adding post to db
const addPost = async (req, res) => {
  const { authorization } = req.headers;
  if (!authorization) return res.status(401).send("Unauthorized");
  const token = authorization.split(" ")[1];
  const user = jwt.verify(token, process.env.TOKEN_SECRET);
  const query = `SELECT * FROM users WHERE id = ?`;
  db.query(query, [user.id], (err, result) => {
    if (err) return res.status(500).send(err);
    if (result.length === 0) return res.status(404).send("User not found");

    const { title, description, image } = req.body;
    if (!title || !description || !image)
      return res.status(400).send("All fields are required");
    const query = `INSERT INTO posts (title, description, img, date, userid) VALUES (?, ?, ?, ?, ? )`;
    const date = new Date().toLocaleString();

    db.query(
      query,
      [title, description, image, date, user.id],
      (err, result) => {
        if (err) return res.status(500).send(err);
        return res.status(200).send("Post added");
      }
    );
  });
};

// Getting all posts from db

const allPost = async (req, res) => {
  const query = `SELECT * FROM posts`;
  db.query(query, (err, result) => {
    if (err) return res.status(500).send(err);
    return res.status(200).send({ result });
  });
};

const getPost = async (req, res) => {
  const { id } = req.params;
  console.log(id);
  const query = `SELECT * FROM posts WHERE postid = ?`;
  db.query(query, [id], (err, result) => {
    if (err) return res.status(500).send(err);
    return res.status(200).send(result[0]);
  });
};

//fetch comments by postid

const fetchComments = async (req, res) => {
  const { id } = req.params;
  const query = `SELECT * FROM comments WHERE postid = ?`;
  db.query(query, [id], (err, result) => {
    if (err) return res.status(500).send(err);
    return res.status(200).send(result);
  });
};

//add commnets to db using postid and userid
const addComments = async (req, res) => {
  const { authorization } = req.headers;
  if (!authorization) return res.status(401).send("Unauthorized");
  const token = authorization.split(" ")[1];
  const user = jwt.verify(token, process.env.TOKEN_SECRET);
  const query = `SELECT * FROM users WHERE id = ?`;
  db.query(query, [user.id], (err, result) => {
    if (err) return res.status(500).send(err);
    if (result.length === 0) return res.status(404).send("User not found");
    const { comment } = req.body;
    const date = new Date().toLocaleString();
    const query = `INSERT INTO comments (comment, userid, postid, date) VALUES (?, ?, ?,?)`;
    db.query(query, [comment, user.id, req.params.id, date], (err, result) => {
      if (err) {
        console.log(err);
        return res.status(500).send(err);
      }
      return res.status(200).send("Comment added");
    });
  });
};

module.exports = {
  addPost,
  allPost,
  getPost,
  fetchComments,
  addComments,
};
