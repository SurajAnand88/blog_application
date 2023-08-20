const db = require("../Helper/db");

// Getting user details using id
const getUser = async (req, res) => {
  console.log(req.body);
  const { userid } = req.body;
  const query = `SELECT * FROM users WHERE id = ?`;
  db.query(query, [userid], (err, result) => {
    if (err) return res.status(500).send(err);
    return res.status(200).send(result[0]);
  });
};

module.exports = {
  getUser,
};
