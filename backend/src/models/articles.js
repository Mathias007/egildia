const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const ArticlesSchema = new Schema(
    {
        allocationKey: {
            type: String,
            trim: true,
            required: true,
            unique: true
        },
        title: {
            type: String,
            trim: true,
            required: true
        },
        content: {
            type: String,
            trim: true,
            required: true
        },
        author: {
            type: String,
            trim: true,
            required: true
        },
        date: {
            type: Date,
            default: new Date()
        }
    },
    {
        versionKey: false
    }
);

module.exports = mongoose.model("Articles", ArticlesSchema);
