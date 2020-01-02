const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const NewsSchema = new Schema(
    {
        title: {
            type: String,
            trim: true,
            required: true,
            unique: true,
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
        },
        lastModified: {
            type: Date,
            default: new Date()
        },
        category: {
            type: String,
            trim: true,
            default: "technical"
        }
    },
    {
        versionKey: false
    }
);

module.exports = mongoose.model("News", NewsSchema);
