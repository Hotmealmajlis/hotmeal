const Mongoose = require("mongoose");

const { Schema } = Mongoose;

const OrderSchema = new Schema({

  cart: {
    type: Schema.Types.ObjectId,
    ref: "Cart",
  },
  orderId: {
    type: String,
    unique: true,
  },
  user: {
    type: Schema.Types.ObjectId,
    ref: "User",
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
