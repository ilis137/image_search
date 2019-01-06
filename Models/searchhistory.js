const mongoose = require("mongoose")

const history = new mongoose.Schema({
    search_name: {
        type: String,
        required: true,

    },
    date: {
        type: Date,
        required: true
    }
})

module.exports = () => mongoose.model("history", history)