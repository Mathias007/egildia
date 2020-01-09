import { BuildingsSchema, UnitsSchema } from "../models/knights";

import resStatuses from "../config/resStatuses";

const { UNAUTHORIZED, NOT_FOUND } = resStatuses;

exports.getBuildingsList = (req, res, next) => {
    const messages = {
        CASE_UNAUTHORIZED_MESSAGE:
            "Wystąpił problem z autoryzacją przy pobieraniu listy budynków Knights and Merchants.",
        CASE_NOT_FOUND_MESSAGE:
            "Nie znaleziono listy budynków Knights and Merchants.",
        CASE_SUCCESS_MESSAGE:
            "Lista budynków Knights and Merchants została znaleziona."
    };

    const {
        CASE_UNAUTHORIZED_MESSAGE,
        CASE_NOT_FOUND_MESSAGE,
        CASE_SUCCESS_MESSAGE
    } = messages;

    BuildingsSchema.find({}, {}, (err, buildings) => {
        if (err || !buildings) {
            res.status(UNAUTHORIZED).send({
                message: CASE_UNAUTHORIZED_MESSAGE
            });
            next(err);
        } else if (!buildings) {
            res.status(NOT_FOUND).send({
                message: CASE_NOT_FOUND_MESSAGE
            });
        } else {
            res.json({ message: CASE_SUCCESS_MESSAGE, buildings });
        }
    });
};

exports.getUnitsList = (req, res, next) => {
    const messages = {
        CASE_UNAUTHORIZED_MESSAGE:
            "Wystąpił problem z autoryzacją przy pobieraniu listy jednostek Knights and Merchants.",
        CASE_NOT_FOUND_MESSAGE:
            "Nie znaleziono listy jednostek Knights and Merchants.",
        CASE_SUCCESS_MESSAGE:
            "Lista jednostek Knights and Merchants została znaleziona."
    };

    const {
        CASE_UNAUTHORIZED_MESSAGE,
        CASE_NOT_FOUND_MESSAGE,
        CASE_SUCCESS_MESSAGE
    } = messages;

    UnitsSchema.find({}, {}, (err, units) => {
        if (err || !units) {
            res.status(UNAUTHORIZED).send({
                message: CASE_UNAUTHORIZED_MESSAGE
            });
            next(err);
        } else if (!units) {
            res.status(NOT_FOUND).send({
                message: CASE_NOT_FOUND_MESSAGE
            });
        } else {
            res.json({ message: CASE_SUCCESS_MESSAGE, units });
        }
    });
};
