import bcrypt from 'bcrypt'
import User from '../models/UserModel.js'
import jwt from "jsonwebtoken"

export const register = async (req, res)=>{
    const { username, email, password, role } = req.body

    const checkUser = await User.findOne({email})
    if(checkUser){
        res.status(406).json({message: "user already exists!"})
        return;
    }
    const saltRounds = 10
    const salt = await bcrypt.genSaltSync(saltRounds)
    const hashedPassword = await bcrypt.hashSync(password, salt)
    const user = await User({
        email,
        password:hashedPassword,
        username,
        role
    })
    await user.save()
    res.status(201).json({message: "user created"})
}

export const login = async (req, res)=>{
    const { email, password } = req.body;

    const user = await User.findOne({email})
    if(!user){
        res.status(406).json({message: "user not found :("})
        return;
    }
    const payload = {
        username: email,
        _id: user._id
    }
    const token = jwt.sign(payload, "secret")
    res.json({message: "user logged in successfully :)", token, user})
}