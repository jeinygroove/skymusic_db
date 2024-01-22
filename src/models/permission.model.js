const mongoose = require("mongoose");
const permissionSchema = mongoose.Schema({
    name: {
        type: Types.String,
        required: true
    },
    description: {
        type: Types.String
    }
})

module.exports = mongoose.model("Permission", permissionSchema)