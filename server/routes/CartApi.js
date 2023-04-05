import { Router } from "express";
import mongoose from "mongoose";
import auth from "../middleware/auth.js";
import checkTokenExpiration from "../middleware/checkTokenExpiration.js";
import jwt from "jsonwebtoken";


import Product from "../models/ProductModel.js";
import {CartItem} from "../models/CartModel.js";
import Cart from "../models/CartModel.js";


const router = Router();

router.post("/add", auth, async (req, res) => {
  try {
    const { items } = req.body;
    const userId = req.user._id;

    // Find the user's cart
    let cart = await Cart.findOne({ user: userId });
    // console.log("cart found", cart);

    // If the user doesn't have a cart, create a new one
    if (!cart) {
      cart = await Cart.create({ user: userId });
      // console.log("cart created", cart);
    }
    // Save cart items to database
    const savedCartItems = [];
    for (const item of items) {
      const { product, quantity, totalPrice } = item;
      const savedCartItem = await CartItem.create({
        product: await Product.findById(product).select("name price"),
        quantity,
        totalPrice,
      });
      savedCartItems.push(savedCartItem);
    }
    console.log(savedCartItems)

    // Add saved cart items to the cart
    for (const savedCartItem of savedCartItems) {
      const existingItem = cart.products.find(
        (product) => product.product == savedCartItem.product
      );
      if (existingItem) {
        // If the item already exists in the cart, update its quantity and total price
        existingItem.quantity += savedCartItem.quantity;
        existingItem.totalPrice += savedCartItem.totalPrice;
      } else {
        // Otherwise, add a new item to the cart
        cart.products.push(savedCartItem);
      }
    }

    // console.log(cart);
    cart.updated = Date.now();
    cart.user = req.user._id;
    await cart.save();

    console.log(cart);
    // console.log("cart updated : )");
    res
      .status(201)
      .json({ cart, savedCartItems, rmessage: "Item(s) added to cart successfully." });
      console.log(savedCartItems);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Internal server error' });
  }
});

router.get("/", auth, async (req, res) => {
  try {
    const userId = req.user._id;
    const cart = await Cart.findOne({ user: userId });
    if (!cart) {
      return res.status(404).json({ message: "Cart not found" });
    }
    res.status(200).json(cart);
  } catch (error) {
    res.status(500).json({ message: "Internal server error" });
  }
});


export default router;
