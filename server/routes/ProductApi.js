import { Router } from "express";
import mongoose from "mongoose";

import Product from "../models/ProductModel.js";

const router = Router();

router.post("/add", async (req, res) => {
  const { name, merchantId, price } = req.body;
  const product = await Product({
    name,
    merchantId,
    price,
  });
  await product.save();
  res.status(201).json({ message: "Product added :)" });
});


export default router;
