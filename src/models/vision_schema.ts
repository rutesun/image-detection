import * as mongoose from "mongoose";

const _visionSchema = new mongoose.Schema({
  url: String,
  results: Array
});

let VisionSchema: mongoose.Model<mongoose.Document>  = null;
try {
  VisionSchema = mongoose.model('Vision')
} catch (error) {
  VisionSchema = mongoose.model("Vision", _visionSchema);
}
export default VisionSchema;
