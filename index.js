const express = require("express");
const DbConnect = require("./db/dbConnect");
const userModel = require("./model/userModel");
const postModel = require("./model/postModel");
const app = express();
const port = 3000;
DbConnect();
app.use(express.json());
app.post("/user", async (req, res) => {
  let { name, email } = req.body;
  let user = new userModel({
    name,
    email,
  });

  await user.save();

  return res.status(201).send(user);
});
app.post("/post", async (req, res) => {
  let { title, user } = req.body;
  let posts = new postModel({
    title,
    user,
  });

  await posts.save();
  let userDetails = await userModel.findOneAndUpdate(
    { _id: user },
    { $push: { post: posts._id } },
    { new: true }
  );
  return res.status(201).send(posts);
});
app.get("/all/users", async  (req, res) => {
    let allUser = await userModel.find({}).populate("post")
    return res.status(201).send(allUser);
})
app.use((req, res) => {
  return res.status(404).send("404 Not Found");
});
app.listen(port, () => {
  console.log("Server Is Running");
});
