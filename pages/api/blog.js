import db from "../../middleware/db";
import BlogModel from "../../models/Blog";
import User from "../../models/User"
const jwt=require("jsonwebtoken")
export default async function handler(req, res) {
  try {
    // verify user
    const token = req.headers.token;
    // verify a token symmetric - synchronous
    var decoded = jwt.verify(token, process.env.JWT_SECRET_KEY);
    const userid = decoded.id;

    // verify user in database
    const user = await User.findOne({ _id: userid });

    if(user){

      // end-point for getting user's blog
      if (req.method == "GET") {
        const result = await BlogModel.find({ userid });
        res.status(200).json({ success: true, message: result });
      }

      // end-point for adding new blog
      if (req.method == "POST") {
        const newBlog = new BlogModel({...req.body,userid});
        const result = await newBlog.save();
        if (result) {
          res.status(200).json({ success: true, message: result });
        } else {
          res
            .status(500)
            .json({ success: false, message: "Internal server error" });
        }
      }

      // end-point for deleting user's blog
      if (req.method == "DELETE") {
        const result = await BlogModel.findOneAndDelete({ _id: req.body.id });
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
    
  } catch (err) {
    res.status(500).json({ success: false, message: err.message });
  }
}
