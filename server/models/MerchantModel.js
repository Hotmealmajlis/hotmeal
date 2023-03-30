const Mongoose = require("mongoose");

const { Schema } = Mongoose;

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
  brandName: {
    type: String,
  },
  created: {
    type: Date,
    default: Date.now,
  },
});

export default new mongoose.model("merchant", MerchantSchema);