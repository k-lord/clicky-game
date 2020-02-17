const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const bacheloretteSchema = new Schema({
    src: {
        type: String,
        required: true
    }
});

const Bachelorette = mongoose.model("Bachelorette", bacheloretteSchema);

module.exports = Bachelorette;