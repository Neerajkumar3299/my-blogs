import mongoose from "mongoose"
const productSchema=new mongoose.Schema({
    userid:String,
    product:{
        type:String,
        required:true
    },
    company:String,
    price:{
        type:Number,
        required:true
    },
    description:{
        type:String,
        required:true
    },
    image:String
})
export default mongoose.models.Product || mongoose.model("Product",productSchema);