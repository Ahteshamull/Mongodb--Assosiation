
const mongoose = require("mongoose")
const DbConnect = () => {
    try {
        mongoose.connect(
          "mongodb+srv://crud:crud@cluster0.eke1e.mongodb.net/crud?retryWrites=true&w=majority&appName=Cluster0"
        ).then(() => {
            console.log("Database Connected.....")
        })
    } catch (error) {
        console.log(error)
    }
}
module.exports= DbConnect