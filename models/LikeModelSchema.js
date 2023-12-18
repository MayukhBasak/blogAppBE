const mongoose= require("mongoose")
const LikeModelSchema= new mongoose.Schema({
    blogID:{
        type: mongoose.Schema.Types.ObjectId,
        ref: "Blog"
    },
})
module.exports= mongoose.model("Like", LikeModelSchema);