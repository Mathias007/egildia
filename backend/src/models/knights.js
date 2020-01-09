import mongoose from "mongoose";

const Schema = mongoose.Schema;

const BuildingsSchema = new Schema({}, { strict: false });
const UnitsSchema = new Schema({}, { strict: false });

exports.BuildingsSchema = mongoose.model(
    "knights/buildings",
    BuildingsSchema,
    "knights/buildings"
);

exports.UnitsSchema = mongoose.model("knights/units", UnitsSchema, "knights/units");
