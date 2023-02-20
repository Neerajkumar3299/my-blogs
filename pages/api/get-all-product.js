import db from "../../middleware/db";
import ProductModel from "../../models/Product";
export default async function handler(req, res) {
  try {
    if (req.method == "GET") {
      const result = await ProductModel.find();
      res.status(200).json({ success: true, message: result });
    }
  } catch (err) {
    res.status(500).json({ success: false, message: err.message });
  }
}
