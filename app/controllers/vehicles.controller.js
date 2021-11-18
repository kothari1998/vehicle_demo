const db = require("../models");
const vehcilesData = db.vehciles;

// Create API
exports.create = (req, res) => {
    // Validate request
    if (!req.body.name) {
        res.status(400).send({ message: "can not be empty!" });
        return;
    }

    // Create a User
    const vehciles = new vehcilesData({
        user_id: req.body.user_id,
        vehicle_name: req.body.vehicle_name,
        vehicle_brand: req.body.vehicle_brand,
        vehcile_number: req.body.vehcile_number,
    });

    // Save User in the database
    vehciles
        .save(vehciles)
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

// find user_id thruw Data
exports.findOne = (req, res) => {
    const id = req.params.user_id;

    vehcilesData.findById(user_id)
        .then(data => {
            if (!data)
                res.status(404).send({ message: "Not found User Vehicle with id " + id });
            else res.send(data);
        })
        .catch(err => {
            res
                .status(500)
                .send({ message: "Error retrieving User Vehicle with id=" + id });
        });
};

//find all user Vehicle user Data
