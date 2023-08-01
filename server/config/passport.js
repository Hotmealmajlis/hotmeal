import passport from "passport";
import passportJWT from "passport-jwt";
import {
  Strategy as JWTStrategy,
  ExtractJwt as ExtractJWT,
} from "passport-jwt";

const options = {
  jwtFromRequest: ExtractJWT.fromAuthHeaderAsBearerToken(),
  secretOrKey: "your_jwt_secret",
};

passport.use(
  new JWTStrategy(options, function (jwtPayload, done) {
    return done(null, jwtPayload);
  })
);

export default passport;
