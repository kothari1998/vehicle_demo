module.exports = mongoose => {
    var schema = mongoose.Schema(
        {
            user_id: String,
            vehicle_uuid: String,
            isDeleted: Boolean
        },
        { timestamps: true }
    );

    schema.method("toJSON", function () {
        const { __v, _id, ...object } = this.toObject();
        object.id = _id;
        return object;
    });

    const vehicleOwnerData = mongoose.model("vehicle_owner", schema);
    return vehicleOwnerData;
};

