import passport from "passport";
import jwt from "jsonwebtoken";

const auth = (req, res, next) => {
  passport.authenticate("jwt", { session: false }, (err, user, info) => {
    // console.log(req.headers);
    if (err) {
      return next(err);
    }
    if (!user) {
      return res.status(401).json({ message: "Unauthorized" });
    }
    req.user = user;

    // Extract userId from JWT token
    const token = req.headers.authorization.split(" ")[1];
    const decodedToken = jwt.verify(token, "your_jwt_secret");
    req.userId = decodedToken._id;

    next();
  })(req, res, next);
};

export default auth;
