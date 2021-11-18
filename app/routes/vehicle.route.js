module.exports = app => {
    const vehicles = require("../controllers/vehicles.controller.js");

    var router = require("express").Router();

    // Create a new Vehicle
    router.post("/", vehicles.create);

    // Retrieve a single User with id
    router.get("/:id", vehicles.findOne);


    app.use('/api/vehicles', router);
};
