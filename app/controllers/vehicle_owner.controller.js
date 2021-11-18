const db = require("../models");
const vehcilesOwnerData = db.vehciles_owners;

// Create vehicle ownerAPI
exports.create = (req, res) => {
    // Create a User
    const vehcileOwner = new vehcilesOwnerData({
        user_id: req.body.user_id,
        vehicle_uuid: req.body.vehicle_uuid,
        isDeleted: req.body.isDeleted
    });

    // Save User in the database
    vehcileOwner
        .save(vehcileOwner)
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message:
                    err.message || "Some error occurred while creating the Vehcle Owner."
            });
        });
};

