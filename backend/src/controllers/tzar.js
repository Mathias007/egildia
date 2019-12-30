const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const NationsSchema = new Schema({}, { strict: false });
const UnitsSchema = new Schema({}, { strict: false });
const SpellsSchema = new Schema({}, { strict: false });
const TechnologiesSchema = new Schema({}, { strict: false });

const Nations = mongoose.model("tzar/nations", NationsSchema, "tzar/nations");
const Units = mongoose.model("tzar/units", UnitsSchema, "tzar/units");
const Spells = mongoose.model("tzar/spells", SpellsSchema, "tzar/spells");
const Technologies = mongoose.model(
    "tzar/technologies",
    TechnologiesSchema,
    "tzar/technologies"
);

// Controller get buildings list
exports.getNationsList = (req, res, next) => {
    Nations.find({}, {}, (err, nations) => {
        if (err || !nations) {
            res.status(401).send({ message: "Unauthorized" });
            next(err);
        } else {
            res.json(nations);
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

// Controller get spells list
exports.getSpellsList = (req, res, next) => {
    Spells.find({}, {}, (err, spells) => {
        if (err || !spells) {
            res.status(401).send({ message: "Unauthorized" });
            next(err);
        } else {
            res.json(spells);
        }
    });
};

// Controller get spells list
exports.getTechnologiesList = (req, res, next) => {
    Technologies.find({}, {}, (err, technologies) => {
        if (err || !technologies) {
            res.status(401).send({ message: "Unauthorized" });
            next(err);
        } else {
            res.json(technologies);
        }
    });
};
