import mongoose from "mongoose";
// const bcrypt = require('bcrypt')

// const saltRounds = 10
const Schema = mongoose.Schema;

const UserSchema = new Schema(
    {
        name: {
            type: String,
            trim: true,
            required: true
        },
        email: {
            type: String,
            trim: true,
            required: true,
            unique: true
        },
        password: {
            type: String,
            trim: true,
            required: true,
            select: false
        },
        role: {
            type: String,
            trim: true,
            default: "USER"
        }
    },
    {
        versionKey: false
    }
);

// UserSchema.pre('save', function (next) {
//   this.password = bcrypt.hashSync(this.password, saltRounds)
//   next()
// })

module.exports = mongoose.model("users", UserSchema);
