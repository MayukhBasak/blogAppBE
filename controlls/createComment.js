const Blog= require("../models/BlogModel")
const Comment= require("../models/CommentModelSchema")
exports.doComment= async function(req, res){
    try{
        const blogID= req.params.blogID;
        let blog= await Blog.findById(blogID)
        if(!blog){
            return res.status(404).json({
                success: false,
                message: "There is no such blog exits."
            })
        }
        else{
            const mssg= req.body.message;
            if(!mssg){
                return res.status(204).json({
                    success: false,
                    message: "please do comment."
                })
            }
            let newComment= await Comment.create({
                comment: mssg
            })
            let updatedBlog= await Blog.findByIdAndUpdate(
                blogID,
                {$push: {comments: newComment._id}},
                {new: true}
            )
            return res.status(200).json({
                success: true,
                message: "successfully comented."
            })
        }
    }
    catch(error){
        console.log(error.message);
        return res.status(500).json({
            success: false,
            message: "Failed to do message",
            error: error.message,
        })
    }
}