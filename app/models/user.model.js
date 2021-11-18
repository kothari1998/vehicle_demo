module.exports = mongoose => {
    var schema = mongoose.Schema(
        {
            name: {
                type: String,
                required: true
            },
            surname: {
                type: String,
                required: true
            },
            email: {
                type: String,
                trim: true,
                lowercase: true,
                unique: true,
                validate: {
                    validator: function(v) {
                        return /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(v);
                    },
                    message: "Please enter a valid email"
                },
                required: [true, "Email required"]
            },
            phone: {
                type: String,
                validate: {
                  validator: function(v) {
                    return /\d{3}-\d{3}-\d{4}/.test(v);
                  },
                  message: '{VALUE} is not a valid phone number!'
                },
                required: [true, 'User phone number required']
             },
            longitude: {
                type: String,
                required: true
            },
            latitude: {
                type: String,
                required: true
            },
            isDelete: {type: Boolean, default:false}
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

