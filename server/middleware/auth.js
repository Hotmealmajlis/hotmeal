import passport from "passport";

const auth = passport.authenticate('jwt', {session: false});

export default auth;