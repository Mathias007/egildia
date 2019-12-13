const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const BuildingsSchema = new Schema({}, { strict: false });
const UnitsSchema = new Schema({}, { strict: false });

const Buildings = mongoose.model("Buildings", BuildingsSchema, "budynki");
const Units = mongoose.model("Units", UnitsSchema, "jednostki");

// Controller get buildings list
exports.getBuildingsList = (req, res, next) => {
    Buildings.find({}, {}, (err, buildings) => {
        if (err || !buildings) {
            res.status(401).send({ message: "Unauthorized" });
            next(err);
        } else {
            res.json(buildings);
        }
    });
};

// Controller get units list
exports.getUnitsList = (req, res, next) => {
    Units.find({}, {}, (err, units) => {
        if (err || !units) {
            res.status(401).send({ message: "Unauthorized" });
            next(err);
        } else {
            res.json(units);
        }
    });
};
