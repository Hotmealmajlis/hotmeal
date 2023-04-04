import mongoose from "mongoose";

const { Schema } = mongoose;

// const options = {
//   separator: "-",
//   lang: "en",
//   truncate: 120,
// };

const ProductSchema = new Schema({
  name: {
    type: String,
    trim: true,
  },
  merchantId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "merchant",
  },
  imageUrl: {
    type: String,
  },
  imageKey: {
    type: String,
  },
  description: {
    type: String,
    trim: true,
  },
  quantity: {
    type: Number,
  },
  price: {
    type: Number,
  },
  updated: Date,
  created: {
    type: Date,
    default: Date.now,
  },
});

export default new mongoose.model("Product", ProductSchema);
