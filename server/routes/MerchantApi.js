import { Router } from "express";
import mongoose from "mongoose";

import Merchant from "../models/MerchantModel.js";

const router = Router();

router.post("/add", async (req, res) => {
  const { name, email, phoneNumber } = req.body;
  const merchant = await Merchant({
    name,
    email,
    phoneNumber,
  });
  await merchant.save();
  res.status(201).json({ message: "Merchant created :)" });
});

router.get('/view', async(req, res)=>{
  try{

    const merchants = await Merchant.find()

    res.status(201).json( merchants )

  } catch (error){
    res.status(400).json({
      error: 'Your reauest could not be processed. Please try again.'
    })
  }
})

// get individual merchant

router.get('/view/:id', async(req, res)=>{
  const {id} = req.params;
  try{

    const individualmerchant = await Merchant.findOne({_id: id })

    res.status(201).json( individualmerchant )

  } catch (error){
    res.status(400).json({
      error: 'Your reauest could not be processed. Please try again.'
    })
  }
})

export default router;
