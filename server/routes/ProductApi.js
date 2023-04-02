import { Router } from "express";
import mongoose from "mongoose";

import Product from "../models/ProductModel.js";

const router = Router();

router.post("/add", async (req, res) => {
  try{
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
      error
    });
  }
});

router.get("/view/:merchantId", async (req, res) => {
  
  try {
    const product = await Product.find();
    const filtered = product.filter((product)=>{
      return product.merchantId === req.params.merchantId
    })
    
    res.status(201).json(filtered);
  } catch (error) {
    res.status(400).json({
      error
    });
  }
});

//view all products

router.get("/view/", async (req, res) => {
  
  try {
    const product = await Product.find();
    
    
    res.status(201).json(product);
  } catch (error) {
    res.status(400).json({
      error
    });
  }
});




export default router;