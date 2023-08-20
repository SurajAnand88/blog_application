const db = require("../Helper/db");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

//Register Route
const register = async (req, res) => {
  const link =
    "https://th.bing.com/th/id/R.b057e6fb8c8ef4d7307987434cb448ad?rik=4%2ftohfpr4apS1g&riu=http%3a%2f%2fclipart-library.com%2fnewhp%2favatar_nick.png&ehk=KNFrQ5owNTmsvn4tREpL%2brqx01UO%2fpMeopUY9v1hrco%3d&risl=&pid=ImgRaw&r=0";
  const query = `SELECT * FROM users WHERE email = ? OR username = ?`;
  const { email, username, image, password } = req.body;
  db.query(query, [email, username], (err, result) => {
    if (err) return res.status(500).send(err);
    if (result.length > 0) return res.status(409).send("User already exists");

    // hashing the password before putting into the database
    const salt = bcrypt.genSaltSync(10);
    const hashedPassword = bcrypt.hashSync(password, salt);

    db.query(
      "INSERT INTO users (username, email, password, image) VALUES (?, ?, ?, ?)",
      [req.body.username, req.body.email, hashedPassword, image ? image : link],
      (err, result) => {
        if (err) return res.status(500).send(err);
        return res.status(200).send("User registered");
      }
    );
  });
};

const login = async (req, res) => {
  const query = `SELECT * FROM users WHERE email = ?`;
  db.query(query, [req.body.email], (err, result) => {
    if (err) return res.status(500).send(err);
    if (result.length === 0) return res.status(404).send("User not found");
    const isPasswordCorrect = bcrypt.compareSync(
      req.body.password,
      result[0].password
    );
    if (!isPasswordCorrect) return res.status(400).send("Invalid credentials");
    const token = jwt.sign({ id: result[0].id }, process.env.TOKEN_SECRET);
    return res.status(200).send({ token, user: result[0] });
  });
};

const loggedInUser = async (req, res) => {
  const { authorization } = req.headers;
  if (!authorization) return res.status(401).send("Unauthorized");
  const token = authorization.split(" ")[1];
  const user = jwt.verify(token, process.env.TOKEN_SECRET);
  const query = `SELECT * FROM users WHERE id = ?`;
  db.query(query, [user.id], (err, result) => {
    if (err) {
      console.log(err);
      return res.status(500).send(err);
    }
    return res.status(200).send(result[0]);
  });
};

module.exports = {
  register,
  login,
  loggedInUser,
};
