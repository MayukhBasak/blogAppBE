const express= require("express")
const blog= require("./routes/blog")
require("dotenv").config();
const dbConnect= require("./config/database")
const app= express();
app.use(express.json())
app.use("/api/v1", blog);

const PORT= process.env.PORT|| 5000;
dbConnect();
app.listen(PORT, ()=>{
    console.log(`App is running at port number: ${PORT}`)
})