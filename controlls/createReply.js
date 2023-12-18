const Comment= require("../models/CommentModelSchema")
const Reply= require("../models/ReplyModel")
exports.reply= async function(req, res){
    try{
        const commentID= req.params.commentID;
        const replyBody= req.body.reply;
        if(!replyBody){
            return res.status(204).json({
                success: false,
                message: "Please do reply",
            })
        }
        let newReply= await Reply.create({
            reply: replyBody
        })
        let updatedComment= await Comment.findByIdAndUpdate(
            commentID,
            {$push: {reply: newReply._id}},
            {new: true}
        )
        return res.status(200).json({
            success: true,
            message: "Replied"
        })
    }
    catch(error){
        console.error(error);
        return res.status(500),json({
            success: false,
            message: "Failed to reply",
            error: error.message,
        })
    }
}