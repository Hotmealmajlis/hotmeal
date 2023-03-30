import { Router } from "express";
import mongoose from "mongoose";

import Order from '../models/OrderModel'
import Cart from '../models/CartModel'
import Product from '../models/ProductModel'

import { ROLES, CART_ITEM_STATUS } from "../constants";
import router from "./AuthApi";

router.post('/add', async (req, res) => {
  try {
    const cart = req.body.cartId;
    const total = req.body.total;
    const user = req.user._id;

    const order = new Order({
      cart,
      user,
      total
    });

    const orderDoc = await order.save();

    const newOrder = {
      _id: orderDoc._id,
      created: orderDoc.created,
      user: orderDoc.user,
      total: orderDoc.total,
      products: cartDoc.products
    };

  }
   catch (error) {
    res.status(400).json({
      error: 'Your request could not be processed. Please try again.'
    });
  }
});

router.delete("/cancel/:orderId", auth, async (req, res) => {
  try {
    const orderId = req.params.orderId;

    const order = await Order.findOne({ _id: orderId });
    const foundCart = await Cart.findOne({ _id: order.cart });

    increaseQuantity(foundCart.products);

    await Order.deleteOne({ _id: orderId });
    await Cart.deleteOne({ _id: order.cart });

    res.status(200).json({
      success: true,
    });
  } catch (error) {
    res.status(400).json({
      error: "Your request could not be processed. Please try again.",
    });
  }
});