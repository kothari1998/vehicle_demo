module.exports = mongoose => {
    var schema = mongoose.Schema(
        {
            user_id: String,
            vehicle_name: String,
            vehicle_brand: String,
            vehcile_number: String,
        },
        { timestamps: true }
    );

    schema.method("toJSON", function () {
        const { __v, _id, ...object } = this.toObject();
        object.id = _id;
        return object;
    });

    const vehicleData = mongoose.model("vehicle", schema);
    return vehicleData;
};

