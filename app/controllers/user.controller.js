const db = require("../models");
const User = db.users;


exports.create = (req, res) => {
    // Create a User
    const user = new User({
        name: req.body.name,
        surname: req.body.surname,
        email: req.body.email,
        phone: req.body.phone,
        longitude: req.body.longitude,
        latitude: req.body.latitude
    });

    // Save User in the database
    user
        .save(user)
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message:
                    err.message || "Some error occurred while creating the Users."
            });
        });
};