const Blog= require("../models/BlogModel")
const Like= require("../models/LikeModelSchema")
exports.doLike= async function(req, res){
    try{
        const blogID= req.params.blogID;
        const blog= await Blog.findById(blogID)
        if(!blog){
            return res.status(404).json({
                success: false,
                message: "There is no such blog exits."
            })
        }
        else{
            let newLike= await Like.create({blogID: blogID});
            console.log(newLike._id)
            let updatedBlog= await Blog.findByIdAndUpdate(
                blogID,
                {$push: {likes: newLike._id}},
                {new: true}
            )
            return res.status(200).json({
                success: true,
                message: "A new like is created successfully"
            })
        }
    }
    catch(error){
        console.error(error.message);
        return res.status(500).json({
            success: false,
            message: "Failed to do like",
            error: error.message,
        })
    }
}