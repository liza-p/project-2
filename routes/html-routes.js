// Requiring path to so we can use relative routes to our HTML files
var path = require("path");
// Requiring our custom middleware for checking if a user is logged in
var isAuthenticated = require("../config/middleware/isAuthenticated");

module.exports = function(app) {
    app.get("/login", function(req, res) {
        // If the user already has an account send them to the members page
        if (req.user) {
            res.redirect("/");
        }
        res.render("login");
    });
    // Here we've add our isAuthenticated middleware to this route.
    // If a user who is not logged in tries to access this route they will be redirected to the signup page
    app.get("/", isAuthenticated, function(req, res) {
        res.render("index", {
            user: req.user
        });
    });
    app.get("/create-pet", isAuthenticated, function(req, res) {
        res.render("createpet", {
            user: req.user
        });
    });

    app.get("/", isAuthenticated, function(req, res) {
        res.render("index", {
            user: req.user
        });
    });
    //added this route. 
    app.get("/create-post", isAuthenticated, function(req, res) {
        res.render("createpost", {
            user: req.user
        })
    })

};