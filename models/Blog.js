import mongoose from "mongoose"
const blogSchema=new mongoose.Schema({
    userid:String,
    title:{
        type:String,
        required:true
    },
    description:{
        type:String,
        required:true
    },
    image:String,
    likedCount:{
        type:Number,
        default:0
    }

})
export default mongoose.models.Blog || mongoose.model("Blog",blogSchema)