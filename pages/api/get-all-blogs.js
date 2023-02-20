import db from "../../middleware/db";
import BlogModel from "../../models/Blog";
export default async function handler(req, res) {
  try {
    if (req.method == "GET") {
      const result = await BlogModel.find();
      res.status(200).json({ success: true, message: result });
    }
  } catch (err) {
    res.status(500).json({ success: false, message: err.message });
  }
}
