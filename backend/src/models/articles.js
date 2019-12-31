const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const ArticlesSchema = new Schema(
    {
        destiny: {
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
            required: true,
            select: false
        },
        author: {
            type: String,
            trim: true,
            required: true
        },
        date: {
            type: Date,
        }
    },
    {
        versionKey: false
    }
);

module.exports = mongoose.model("Articles", ArticlesSchema);
