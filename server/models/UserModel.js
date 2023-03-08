import mongoose from "mongoose";
import { ROLES } from "../constants/index.js";

const { Schema } = mongoose;

const userSchema = new Schema({
  username: { type: String, required: true, unique: true },
  email: {
    type: String,
    required: true,
    unique: true,
    match: [
      /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,
      "Please enter a valid E-mail",
    ],
  },
  password: {
    type: String,
    required: true,
    minlength: [6, "password must have at least six(6) characters"],
  },
  role: {
    type: String,
    require: true,
    default: ROLES.User,
    enum: [ROLES.Admin, ROLES.User, ROLES.Merchant],
  },

});

export default new mongoose.model('User', userSchema);