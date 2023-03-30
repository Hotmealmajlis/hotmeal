import mongoose from "mongoose";

const { Schema } = mongoose;

const OrderSchema = new Schema({
  cartId: {
    // type: Schema.Types.ObjectId,
    // ref: "Cart",
    type: String
  },
  orderId: {
    type: String,
    unique: true,
  },
  userId: {
    // type: Schema.Types.ObjectId,
    // ref: "User",
    type: String
  },
  total: {
    type: Number,
    default: 0,
  },
  created: {
    type: Date,
    default: Date.now,
  },
});

export default new mongoose.model("Order", OrderSchema);
