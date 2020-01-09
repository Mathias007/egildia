import mongoose from "mongoose";

const Schema = mongoose.Schema;

const NationsSchema = new Schema({}, { strict: false });
const UnitsSchema = new Schema({}, { strict: false });
const SpellsSchema = new Schema({}, { strict: false });
const TechnologiesSchema = new Schema({}, { strict: false });

exports.NationsSchema = mongoose.model(
    "tzar/nations",
    NationsSchema,
    "tzar/nations"
);

exports.UnitsSchema = mongoose.model("tzar/units", UnitsSchema, "tzar/units");

exports.SpellsSchema = mongoose.model(
    "tzar/spells",
    SpellsSchema,
    "tzar/spells"
);

exports.TechnologiesSchema = mongoose.model(
    "tzar/technologies",
    TechnologiesSchema,
    "tzar/technologies"
);
