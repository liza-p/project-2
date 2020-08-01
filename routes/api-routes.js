var db = require("../models");
var isAuthenticated = require("../config/middleware/isAuthenticated");
module.exports = function(app) {
    //function to capture the user input data  and insert into a db tabel
    app.post("/api/create-pet", isAuthenticated, function(req, res) {
        console.log(req.user);
        db.Pet.create({
            name: req.body.name,
            pet: req.body.pet,
            addDescription: req.body.addDescription,
            img_url: req.body.image,
            UserId: req.user.id,

        })

        .then(function() {
                res.status(200).json({});
            })
            .catch(function(err) {
                console.error(err);
                res.status(401).json(err);
            });
    });
    app.post("/create-post"), isAuthenticated,
        function(req, res) {
            res.render("createpost", {
                user: req.user
            })
        }

};