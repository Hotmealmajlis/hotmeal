import jwt from "jsonwebtoken";

const checkTokenExpiration = (req, res, next) => {
  const token =
    req.headers.authorization && req.headers.authorization.split(" ")[1];
  if (!token) {
    return res.status(401).json({ message: "Unauthorized" });
  }
  jwt.verify(token, "your_jwt_secret", (err, decoded) => {
    if (err) {
      if (err.name === "TokenExpiredError") {
        return res.status(401).json({ message: "Token expired" });
      } else {
        return res.status(401).json({ message: "Unauthorized" });
      }
    }
    req.user = decoded;
    next();
  });
};

export default checkTokenExpiration;
