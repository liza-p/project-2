// Requiring path to so we can use relative routes to our HTML files
var path = require("path");
var db = require("../models");
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
        db.Post.findAll()
        .then(function(posts){
            const filteredPosts = posts.map(function(post) {
                return post.dataValues;
            });
            res.render("index", {
                user: req.user,
                posts: filteredPosts
            });
        })
        
    });
    app.get("/create-pet", isAuthenticated, function(req, res) {
        res.render("createpet", {
            user: req.user
        });
    });
    app.get("/create-post", isAuthenticated, function(req, res) {
        db.Pet.findAll({
            where: {
              UserId: req.user.id,
            }
          }).then(function(pets){
              //using map to transform Pet table to get only data we need
            const filteredPets = pets.map(function(pet) {
                return pet.dataValues;
            });
            res.render("createpost", {
                user: req.user,
                pets: filteredPets
            })
          })
        
    })

};