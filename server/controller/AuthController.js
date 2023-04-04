import bcrypt from 'bcrypt'
import User from '../models/UserModel.js'
import passportJWT from "passport-jwt";
import jwt from "jsonwebtoken";
import passport from "../config/passport.js";
import auth from "../middleware/auth.js";
import checkTokenExpiration from "../middleware/checkTokenExpiration.js";
import role from "../middleware/role.js";


const secret = "secret"

export const register = async (req, res)=>{
    try {
      const { username, email, password, role } = req.body;

      if (!email) {
        return res
          .status(400)
          .json({ error: "You must enter an email address." });
      }

      if (!username) {
        return res.status(400).json({ error: "You must enter an username." });
      }

      if (!password) {
        return res.status(400).json({ error: "You must enter a password." });
      }

      const existingUser = await User.findOne({ email });

      if (existingUser) {
        res.status(406).json({ message: "user already exists!" });
        return;
      }

      const salt = await bcrypt.genSaltSync(10);
      const hashedPassword = await bcrypt.hashSync(password, salt);

      const user = await User({
        email,
        password: hashedPassword,
        username,
        role,
      });
      const registeredUser = await user.save();

      const payload = {
        id: registeredUser.id,
      };
      const token = jwt.sign(payload, secret);

      res.status(200).json({
        message: "user Created :)",
        success: true,
        token: `Bearer ${token}`,
        user: {
          id: registeredUser.id,
          username: registeredUser.username,
          email: registeredUser.email,
          role: registeredUser.role,
        }
      });

    } catch (error) {
      res.status(400).json({
        error
      });
    }
}

export const login = async (req, res)=>{
    try{
        const { email, password } = req.body;

        if (!email) {
        return res
            .status(400)
            .json({ error: 'You must enter an email address.' });
        }

        if (!password) {
        return res.status(400).json({ error: 'You must enter a password.' });
        }

        const user = await User.findOne({email})
        if(!user){
            res.status(406).json({message: "user not found :("})
            return;
        }

        const isMatch = await bcrypt.compare(password, user.password)
        if (!isMatch){
            return res.status(400).json({
                success: false,
                error: 'Password Incorrect'
            })
        }

        const payload = {
            username: email,
            _id: user._id
        }

        const token = jwt.sign(payload, "your_jwt_secret", { expiresIn: "1h" });
        if (!token) {
            throw new Error();
        }

        res.status(200).json({
            message: "user logged in successfully :)",
            success: true,
            token: `Bearer ${token}`,
            user: {
                id: user.id,
                username: user.username,
                email: user.email,
                role: user.role
            }
        })
    } catch (error){
        res.status(400).json({
            error: 'Your request could not be processed!'
        })
    }
}

export const logout = async (req, res) => {
  // clear the cookie that holds the JWT token
  res.clearCookie("jwtToken");
  // return success message
  res.status(200).json({ message: "Logout successful" });
  console.log("logged out")
}