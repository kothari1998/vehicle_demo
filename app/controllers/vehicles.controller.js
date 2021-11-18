const db = require("../models");
const vehcilesData = db.vehciles;
const User = db.users;

// Create API
exports.create = (req, res) => {
  

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
    const id = req.params.id;

    vehcilesData.findById(id)

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

var dbUser = [];


 
  
// Finding all Data
User.find({ isDelete : false })
    .then(data => {
        console.log("Database User:")
        console.log(data);
  
        // Putting all user id's in dbUser arrray
        data.map((d, k) => {
            dbUser.push(d._id);
        })
  
        // Getting user who are in any
        // database user by filtering vehicles
        // whose userid matches with any id in
        // dbUser array
        vehcilesData.find({ user_id: { $in: dbUser } })
            .then(data => {
                console.log("Students in Database Courses:")
                console.log(data);
            })
            .catch(error => {
                console.log(error);
            })
            
    })
    .catch(error => {
        console.log(error);
    })
