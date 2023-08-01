import mongoose from "mongoose";
import { ORDER_STATUS } from "../constants/index.js";
const { Schema } = mongoose;

const OrderSchema = new Schema({
  cart: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Cart'
  },
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User'
  },
  orderId: {
    type: String,
    unique: true,
  },
  total: {
    type: Number,
    default: 0,
  },
  qrCodeUrl: String,
  items: [
    {
      id: Number,
      name: String,
      image: String,
      price: Number,
      quantity: Number,
    },
  ],
status: {
    type: String,
    default: ORDER_STATUS.Ordered,
    enum: [
      ORDER_STATUS.Ordered,
      ORDER_STATUS.Confirmed,
      ORDER_STATUS.Delivered,
      ORDER_STATUS.Cancelled
    ]
  },
  created: {
    type: Date,
    default: Date.now,
  },
});

export default new mongoose.model("Order", OrderSchema);
