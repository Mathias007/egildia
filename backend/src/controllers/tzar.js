import mongoose from "mongoose";
import resStatuses from "../config/resStatuses";

const { UNAUTHORIZED } = resStatuses;

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

exports.getNationsList = (req, res, next) => {
    const messages = {
        CASE_UNAUTHORIZED_MESSAGE:
            "Wystąpił problem z autoryzacją przy pobieraniu listy nacji Tzar: Ciężar Korony."
        // CASE_NOT_FOUND_MESSAGE:
        //     "Nie znaleziono listy nacji Tzar: Ciężar Korony.",
        // CASE_SUCCESS_MESSAGE:
        //     "Lista nacji Tzar: Ciężar Korony została znaleziona."
    };

    const {
        CASE_UNAUTHORIZED_MESSAGE
        // CASE_NOT_FOUND_MESSAGE,
        // CASE_SUCCESS_MESSAGE
    } = messages;

    Nations.find({}, {}, (err, nations) => {
        if (err || !nations) {
            res.status(UNAUTHORIZED).send({
                message: CASE_UNAUTHORIZED_MESSAGE
            });
            next(err);
        } else {
            res.json(nations);
        }
    });
};

exports.getUnitsList = (req, res, next) => {
    const messages = {
        CASE_UNAUTHORIZED_MESSAGE:
            "Wystąpił problem z autoryzacją przy pobieraniu listy jednostek Tzar: Ciężar Korony."
        // CASE_NOT_FOUND_MESSAGE:
        //     "Nie znaleziono listy jednostek Tzar: Ciężar Korony.",
        // CASE_SUCCESS_MESSAGE:
        //     "Lista jednostek Tzar: Ciężar Korony została znaleziona."
    };

    const {
        CASE_UNAUTHORIZED_MESSAGE
        // CASE_NOT_FOUND_MESSAGE,
        // CASE_SUCCESS_MESSAGE
    } = messages;

    Units.find({}, {}, (err, units) => {
        if (err || !units) {
            res.status(UNAUTHORIZED).send({
                message: CASE_UNAUTHORIZED_MESSAGE
            });
            next(err);
        } else {
            res.json(units);
        }
    });
};

exports.getSpellsList = (req, res, next) => {
    const messages = {
        CASE_UNAUTHORIZED_MESSAGE:
            "Wystąpił problem z autoryzacją przy pobieraniu listy zaklęć Tzar: Ciężar Korony."
        // CASE_NOT_FOUND_MESSAGE:
        //     "Nie znaleziono listy zaklęć Tzar: Ciężar Korony.",
        // CASE_SUCCESS_MESSAGE:
        //     "Lista zaklęć Tzar: Ciężar Korony została znaleziona."
    };

    const {
        CASE_UNAUTHORIZED_MESSAGE
        // CASE_NOT_FOUND_MESSAGE,
        // CASE_SUCCESS_MESSAGE
    } = messages;

    Spells.find({}, {}, (err, spells) => {
        if (err || !spells) {
            res.status(UNAUTHORIZED).send({
                message: CASE_UNAUTHORIZED_MESSAGE
            });
            next(err);
        } else {
            res.json(spells);
        }
    });
};

exports.getTechnologiesList = (req, res, next) => {
    const messages = {
        CASE_UNAUTHORIZED_MESSAGE:
            "Wystąpił problem z autoryzacją przy pobieraniu listy technologii Tzar: Ciężar Korony."
        // CASE_NOT_FOUND_MESSAGE:
        //     "Nie znaleziono listy technologii Tzar: Ciężar Korony.",
        // CASE_SUCCESS_MESSAGE:
        //     "Lista technologii Tzar: Ciężar Korony została znaleziona."
    };

    const {
        CASE_UNAUTHORIZED_MESSAGE
        // CASE_NOT_FOUND_MESSAGE,
        // CASE_SUCCESS_MESSAGE
    } = messages;

    Technologies.find({}, {}, (err, technologies) => {
        if (err || !technologies) {
            res.status(UNAUTHORIZED).send({
                message: CASE_UNAUTHORIZED_MESSAGE
            });
            next(err);
        } else {
            res.json(technologies);
        }
    });
};
