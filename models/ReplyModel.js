const mongoose= require("mongoose")

const replySchema= new mongoose.Schema({
    reply: {
        type: String
    },
})
module.exports= mongoose.model("Reply", replySchema);