import { Router } from "express";
import mongoose from "mongoose";

import Merchant from "../models/MerchantModel.js";

const router = Router();

router.post("/add", async (req, res) => {
  const { name, mail, phoneNumber } = req.body;
  const merchant = await Merchant({
    name,
    mail,
    phoneNumber,
  });
  await merchant.save();
  res.status(201).json({ message: "Merchant created :)" });
});

export default router;
