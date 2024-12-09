const { Schema, default: mongoose } = require("mongoose")
const PostModel = new Schema({
    title: {
        type:String
    },
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref:"User"
    }
})
module.exports = mongoose.model("Post",PostModel)