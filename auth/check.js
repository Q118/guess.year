const checkAuthenticated = (req, res, next) => {
    console.log(req.isAuthenticated)
    if (req.isAuthenticated()) {
        console.log("authenticated in checkAuthenticated");
        return next();
    }
    res.redirect('/login');
    console.log("not authenticated in checkAuthenticated");
}

const checkNotAuthenticated = (req, res, next) => {
    if (req.isAuthenticated()) {
        console.log("authenticated in checkNotAuthenticated");
        return res.redirect('/');
    }
    next();
    console.log("not authenticated in checkNotAuthenticated");
}

module.exports = { checkAuthenticated, checkNotAuthenticated };