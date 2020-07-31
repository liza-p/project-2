// Requiring our models and passport as we've configured it
var db = require("../models");
var passport = require("../config/passport");
var express = require("express")
var app = express()

module.exports = function(app) {
    // Using the passport.authenticate middleware with our local strategy.
    // If the user has valid login credentials, send them to the members page.
    // Otherwise the user will be sent an error
    app.post("/api/login", passport.authenticate("local"), function(req, res) {
        res.json(req.user);
    });
    // Route for logging user out
    app.get("/logout", function(req, res) {
        req.logout();
        res.redirect("/");
    });

    // Route for getting some data about our user to be used client side
    app.get("/api/user_data", function(req, res) {
        if (!req.user) {
            // The user is not logged in, send back an empty object
            res.json({});
        } else {
            // Otherwise send back the user's email and id
            // Sending back a password, even a hashed password, isn't a good idea
            res.json({
                email: req.user.email,
                id: req.user.id,
                name: req.user.name
            });
        }
    });
    app.get("/", isAuthenticated, function(req, res) {
        res.render("index", {
            user: req.user
        });
    });

    app.get("/create-post", isAuthenticated, function(req, res) {
        res.render("createpost", {
            user: req.user
        })
    })

    app.post("/create-post"), isAuthenticated,
        function(req, res) {
            res.render("createpost", {
                user: req.user
            })
        }
};