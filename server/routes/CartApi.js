import { Router } from "express";
import mongoose from "mongoose";
import auth from "../middleware/auth.js";


import Product from "../models/ProductModel.js";

const router = Router();

router.post("/add", auth, async (req, res) => {
  try {
    const { name, price, merchantId } = req.body;

    // const mId = req.params.id;
    const product = await Product({
      name,
      merchantId,
      price,
    });
    await product.save();
    res.status(201).json({ message: "Product added :)" });
  } catch (error) {
    res.status(400).json({
      error,
    });
    console.log(error);
  }
});

router.get("/view/:merchantId", auth, async (req, res) => {
  // const { merchantId } = req.params;

  try {
    const merchantId = req.params.merchantId;

    const products = await Product.find({ merchantId }).populate("merchantId");
    // console.log(products)
    res.status(200).json(products);
  } catch (error) {
    res.status(400).json({
      error,
    });
    console.log(error);
  }
});

//view all products

router.get("/view/", auth, async (req, res) => {
  try {
    const product = await Product.find();

    res.status(201).json(product);
  } catch (error) {
    res.status(400).json({
      error,
    });
  }
});

export default router;
