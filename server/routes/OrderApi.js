import { Router } from "express";
// const router = express.Router();

import mongoose from "mongoose";

import Order from '../models/OrderModel.js'
import Cart from '../models/CartModel.js'
import Product from '../models/ProductModel.js'
import { ROLES } from "../constants/index.js";


const router = Router()

router.post('/add', async (req, res) => {
    const {  total, items, orderId } = req.body;
    const order = await Order({
      // cartId,
      // userId,
      total,
      items,
      orderId,
    });
    console.log(order);
    await order.save();
    res.status(201).json({ message: "Order Placed :)" });
});

// router.get("/:orderId", auth, async (req, res) => {
//   try {
//     const orderId = req.params.orderId;

//     let orderDoc = null;

//     if (req.user.role === ROLES.Admin) {
//       orderDoc = await Order.findOne({ _id: orderId }).populate({
//         path: "cart",
//         populate: {
//           path: "products.product",
//           populate: {
//             path: "brand",
//           },
//         },
//       });
//     } else {
//       const user = req.user._id;
//       orderDoc = await Order.findOne({ _id: orderId, user }).populate({
//         path: "cart",
//         populate: {
//           path: "products.product",
//           populate: {
//             path: "brand",
//           },
//         },
//       });
//     }

//     if (!orderDoc || !orderDoc.cart) {
//       return res.status(404).json({
//         message: `Cannot find order with the id: ${orderId}.`,
//       });
//     }

//     let order = {
//       _id: orderDoc._id,
//       total: orderDoc.total,
//       created: orderDoc.created,
//       totalTax: 0,
//       products: orderDoc?.cart?.products,
//       cartId: orderDoc.cart._id,
//     };

//     order = store.caculateTaxAmount(order);

//     res.status(200).json({
//       order,
//     });
//   } catch (error) {
//     res.status(400).json({
//       error: "Your request could not be processed. Please try again.",
//     });
//   }
// });

// router.delete("/cancel/:orderId", auth, async (req, res) => {
//   try {
//     const orderId = req.params.orderId;

//     const order = await Order.findOne({ _id: orderId });
//     const foundCart = await Cart.findOne({ _id: order.cart });

//     increaseQuantity(foundCart.products);

//     await Order.deleteOne({ _id: orderId });
//     await Cart.deleteOne({ _id: order.cart });

//     res.status(200).json({
//       success: true,
//     });
//   } catch (error) {
//     res.status(400).json({
//       error: "Your request could not be processed. Please try again.",
//     });
//   }
// });


export default router