import db from "../../middleware/db"
import UserModel from "../../models/User"
const bcrypt = require("bcrypt");
const SALT_ROUND=10;
export default async function handler(req,res){
    try{

        if(req.method=="GET"){
            const result=await UserModel.findOne({email:req.body.email,password:req.body.password});
            if(result){
                res.status(200).json({success:true,message:result})
            }
            else{
                res.status(404).json({success:false,message:"Invalid credentials"});
            }
        }
        if(req.method=="POST"){
            const existUser=await UserModel.findOne({email:req.body.email})
            if(!existUser){
                const hash = bcrypt.hashSync(req.body.password, SALT_ROUND);
                // Store hash in your password DB.
                const newUser = new UserModel({
                          ...req.body,
                          password: hash,
                        });
                const result=await newUser.save();
                if(result){
                    return res.status(200).json({success:true,message:result});
                }
                else{
                    return res.status(500).json({success:false,message:"Internal server error"});
                }
            }
            else{
                return res.status(400).json({success:false,message:"Already have account with  given email id"})
            }
        }
    }
    catch(err){
        res.status(500).json({success:false,message:err.message});
    }
}