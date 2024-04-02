const mongoose = require('mongoose');

const CoupleSchema = mongoose.Schema(
    {
        husbandfirstname: {
            type: String,
            required: [true, "Husband name is required"]
        },

        husbandlastname: {
            type: String,
            required: [true, "Husband last name is required"]
        },

        spousefirstname: {
            type: String,
            required: [true, "Spouse name is required"]
        },

        husbandimage: {
            type: String,
            required: [false, "Spouse image is optional"]
        },

        spouseimage: {
            type: String,
            required: [false, "Spouse image is optional"]
        },
    },
    {
        timestamps: true
    }
);

const Couple = mongoose.model("Couple", CoupleSchema);

module.exports = Couple;