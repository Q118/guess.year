const LocalStrategy = require('passport-local').Strategy;


const initialize = (passport, getUserByEmail) => {
    const authenticateUser = (email, password, done) => {
        const user = getUserByEmail(email);
        if (user == null) {
            return done(null, false, { message: 'No user with that email' });
        }
        try {
            if (await bcrypt.compare(password, user.password)) {
                //true if our user is authenticated, so return that user
                return done(null, user);
            } else {
                return done(null, false, { message: 'Password incorrect' });
            }
        } catch (error) {
            return done(error);
        }
    }

    // dont need to include password as it is default
    passport.use(new LocalStrategy({ usernameField: 'email' }), authenticateUser);
    passport.serializeUser((user, done) => {
        // this is going to serialize our user to store inside of the session
        // return done(null, user.id)
    });
    passport.deserializeUser((id, done) => {
        //return done(null, getUserById(id));
    });
}


module.exports = initialize