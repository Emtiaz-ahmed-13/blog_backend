import mongoose from "mongoose";

const categorySchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  author: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: true,
  },
  shares: {
    type: Number,
    default: 0,
  },
  post:{
    type: mongoose.Schema.Types.ObjectId,
    ref: "Post",
  }


}, {
  timestamps: true
});

export default mongoose.model("Category", categorySchema);
