module.exports = mongoose => {
    var schema = mongoose.Schema(
        {
            name: String,
            surname: String,
            email: String,
            phone: String,
            lat: String,
            long: String
        },
        { timestamps: true }
    );

    schema.method("toJSON", function () {
        const { __v, _id, ...object } = this.toObject();
        object.id = _id;
        return object;
    });

    const userData = mongoose.model("users", schema);
    return userData;
};

