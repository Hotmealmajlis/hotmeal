import mongoose from "mongoose";

const { Schema } = mongoose;

const MerchantSchema = new Schema({
  name: {
    type: String,
  },
  email: {
    type: String,
  },
  phoneNumber: {
    type: String,
  },
  created: {
    type: Date,
    default: Date.now,
  },
});

export default new mongoose.model("merchant", MerchantSchema);
