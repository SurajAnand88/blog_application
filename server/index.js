const express = require("express");
const cors = require("cors");
require("dotenv").config();
const postRouter = require("./Routes/postRoute");
const userRouter = require("./Routes/userRoute");
const authRouter = require("./Routes/authRoute");

const app = express();
app.use(express.json());
app.use(cors());

const PORT = process.env.PORT || 4000;

app.use("/api/posts", postRouter);
app.use("/api/users", userRouter);
app.use("/api/auth", authRouter);

app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`);
});
