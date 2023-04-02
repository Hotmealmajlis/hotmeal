import mongoose from "mongoose";
import slug from "mongoose-slug-generator";

const { Schema } = mongoose;

const options = {
  separator: "-",
  lang: "en",
  truncate: 120,
};

// mongoose.plugin(slug, options);

// Product Schema
const ProductSchema = new Schema({
  name: {
    type: String,
    trim: true,
  },
  merchantId: {
    type: String,
  },
  // slug: {
  //   type: String,
  //   slug: "name",
  //   unique: true,
  // },
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
