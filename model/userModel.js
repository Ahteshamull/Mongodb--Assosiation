const { Schema, default: mongoose } = require("mongoose");
const UserModel = new Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  post: [{ type: mongoose.Schema.Types.ObjectId, ref: "Post" }],
});
module.exports = mongoose.model("User", UserModel);
