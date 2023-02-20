import db from "../../middleware/db";
import User from "../../models/User"
const jwt=require("jsonwebtoken")
const bcrypt=require("bcrypt")
function helloUser(req,res,next){
    console.log("Hello User");
    next();
}
export default async function handler(req, res) {
    try{
        let {email,password}=req.body;

        // check whether any account with given email id is present in database or not
        const user=await User.findOne({email})
        if(user){
          // Check password
          if(bcrypt.compareSync(password, user.password)){
            var token = jwt.sign({ id: user._id }, process.env.JWT_SECRET_KEY);
            return res.status(200).json({success:true,message:token})
          }
          else{
            res
              .status(403)
              .json({
                success: false,
                message: "Invalid username or password",
              });
          }
        }
        else{
            return res.status(403).json({success:false,message:"Invalid username or password"})
        }
    }
    catch(err){
        return res.status(500).json({success:false,message:err.message})
    }
}
