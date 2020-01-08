import mongoose from "mongoose";
import resStatuses from "../config/resStatuses";

const { UNAUTHORIZED } = resStatuses;

const Schema = mongoose.Schema;

const BuildingsSchema = new Schema({}, { strict: false });
const UnitsSchema = new Schema({}, { strict: false });

const Buildings = mongoose.model("knights/buildings", BuildingsSchema, "knights/buildings");
const Units = mongoose.model("knights/units", UnitsSchema, "knights/units");

exports.getBuildingsList = (req, res, next) => {
    Buildings.find({}, {}, (err, buildings) => {
        if (err || !buildings) {
            res.status(UNAUTHORIZED).send({ message: "Unauthorized" });
            next(err);
        } else {
            res.json(buildings);
        }
    });
};

exports.getUnitsList = (req, res, next) => {
    Units.find({}, {}, (err, units) => {
        if (err || !units) {
            res.status(UNAUTHORIZED).send({ message: "Unauthorized" });
            next(err);
        } else {
            res.json(units);
        }
    });
};
