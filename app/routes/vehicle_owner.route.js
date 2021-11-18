module.exports = app => {
    const vehiclesOwner = require("../controllers/vehicle_owner.controller.js");

    var router = require("express").Router();

    // Create a new Tutorial
    router.post("/", vehiclesOwner.create);

    app.use('/api/user_owned_vechicles', router);
};
