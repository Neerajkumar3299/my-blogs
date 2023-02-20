
import mongoose from "mongoose"
const db=mongoose.connect(process.env.MONGODB_URI).then((result)=>{
    console.log("connected successfully...")
},(err)=>{
    console.log(err.message)
})
export default db;
