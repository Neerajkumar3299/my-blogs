import "../../middleware/db";
import QueryModel from "../../models/Query"
export default async function handler(req, res) {
  try{
    if (req.method == "GET") {
        const result=await QueryModel.find();
        if(result){
          res.status(200).json({success:true,message:result});
        }
        else{
          res.status(500).json({success:true,message:"internal server error"})
        }
    }
    if(req.method=="POST"){
        console.log(req.body)
        const newCollection=new QueryModel(req.body);
        const result=await newCollection.save();
        if(result){
            res.status(200).json({success:true,message:req.body});
        }
        else{
            res.status(500).json({success:false,message:"Interna server error"})
        }
    }
  }
  catch(err){
    res.status(500).json({success:false,message:err.message})
  }
}
