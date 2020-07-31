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

   
};