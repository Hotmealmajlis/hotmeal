import mongoose from "mongoose";

const { Schema } = mongoose;

const CartItemSchema = new Schema({
  product: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Product",
    populate: {
      path: "product",
      select: "name price",
    },
  },
  quantity: Number,
  totalPrice: {
    type: Number,
    default: 0,
  },
});

export const CartItem = mongoose.model("CartItem", CartItemSchema);

const CartSchema = new Schema({
  products: [CartItemSchema],
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
  },
  updated: Date,
  created: {
    type: Date,
    default: Date.now,
  },
});
export default new mongoose.model("Cart", CartSchema);
