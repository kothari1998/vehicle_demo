module.exports = app => {
    const vehicles = require("../controllers/vehicles.controller.js");

    var router = require("express").Router();

    // Create a new Tutorial
    router.post("/", vehicles.create);

    app.use('/api/vehicles', router);
};
