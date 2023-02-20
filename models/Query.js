const mongoose=require("mongoose");
const QuerySchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  email: String,
  query: {
    type: String,
    required: true,
  },
},{timestamps :true});
export default mongoose.models.Query || mongoose.model("Query", QuerySchema);
