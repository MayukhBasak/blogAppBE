const mongoose= require("mongoose")

const commentModelSchema= new mongoose.Schema({
    comment: {
        type: String,
        trim: true,
    },
    reply: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Reply",
        }
    ]
})
module.exports= mongoose.model("Comment", commentModelSchema)