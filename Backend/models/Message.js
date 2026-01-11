import mongoose from "mongoose";

const messageSchema = new mongoose.Schema(
  {
    sender: {
      type: String,
      enum: ["user", "bot"],
      required: true
    },
    text: {
      type: String,
      required: true
    }
  },
  { timestamps: true }
);

export default mongoose.model("Message", messageSchema);
