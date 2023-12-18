const express= require("express")
const router= express.Router();

const {createBlog}= require("../controlls/createBlog")
const {doLike}= require("../controlls/likeBlog")
const {doComment}= require("../controlls/createComment")
const {reply}= require("../controlls/createReply")
router.post("/post-blog", createBlog)
router.post("/like/:blogID", doLike);
router.post("/comment/:blogID", doComment);
router.post("/reply/:commentID", reply);
module.exports= router;