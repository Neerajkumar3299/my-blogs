import db from "../../middleware/db"
import ProductModel from "../../models/Product"
import User from "../../models/User"
const jwt=require("jsonwebtoken")
export default async function handler(req,res){
    try{
      // verify user
      const token = req.headers.token;
      // verify a token symmetric - synchronous
      var decoded = jwt.verify(token, process.env.JWT_SECRET_KEY);
      const userid = decoded.id;

      // verify user in database
      const user = await User.findOne({ _id: userid });

      if(user){
        if (req.method == "GET") {
          const result = await ProductModel.find({ userid });
          res.status(200).json({ success: true, message: result });
        }
        if (req.method == "POST") {
          const newProduct = new ProductModel({ ...req.body, userid });
          const result = await newProduct.save();
          if (result) {
            res.status(200).json({ success: true, message: result });
          } else {
            res
              .status(500)
              .json({ success: false, message: "Internal server error" });
          }
        }
        if (req.method == "DELETE") {
          const result = await ProductModel.findOneAndDelete({
            _id: req.body.id,
          });
          if (result) {
            res.status(200).json({ success: true, message: result });
          } else {
            res
              .status(500)
              .json({ success: false, message: "Internal server error" });
          }
        }
      }
      else{
        res.status(401).json({success:false,message:"Unauthorized user!"})
      }
      
    }
    catch(err){
        res.status(500).json({success:false,message:err.message})
    }
}