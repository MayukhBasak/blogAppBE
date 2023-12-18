const Blog= require("../models/BlogModel")

exports.createBlog= async(req, res)=>{
    try{
        const {title, body}= req.body;
        if(!title || !body){
            return res.status(404).json({
                success: false,
                message: "Please fill all the details carefully"
            })
        }

        const titleWordLimit= 20;
        const bodyWordLimit= 350;
        const titleWords= title.split(' ');
        const bodyWords= body.split(' ');

        if (titleWords.length > titleWordLimit) {
            return res.status(400).json({
              success: false,
              message: `Title exceeds the word limit of ${titleWordLimit} words.`,
            });
          }
        if(bodyWords.length> bodyWordLimit){
            return res.status(400).json({
                success: false,
                message: `Body exceeds the word limit of ${bodyWordLimit} words.`
            })
        }
        const newBlog= await Blog.create({
            title: title,
            body: body
        })

        return res.status(200).json({
            success: true,
            message: "Your Blog is created successfully",
            blog: newBlog
        })
    }
    catch(error){
        console.error(error);
        return res.status(500).json({
            success: false,
            error: error.message,
            message: "unable is post your blog, Please try again"

        })
    }
}