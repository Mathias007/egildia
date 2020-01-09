import mongoose from "mongoose";
import UserSchema from "../models/users";
import resStatuses from "../config/resStatuses";

const { UNAUTHORIZED, NOT_FOUND, CONFLICT } = resStatuses;

function validateEmailAccessibility(email) {
    return UserSchema.findOne({
        email: email
    }).then(result => {
        return !result;
    });
}

exports.getUsersList = (req, res, next) => {
    const messages = {
        CASE_UNAUTHORIZED_MESSAGE:
            "Wystąpił problem z autoryzacją przy pobieraniu listy użytkowników!",
        CASE_NOT_FOUND_MESSAGE: "Nie znaleziono użytkowników.",
        CASE_SUCCESS_MESSAGE: "Lista użytkowników została znaleziona."
    };

    const {
        CASE_UNAUTHORIZED_MESSAGE,
        CASE_NOT_FOUND_MESSAGE,
        CASE_SUCCESS_MESSAGE
    } = messages;

    UserSchema.find({}, {}, (err, users) => {
        if (err || !users) {
            res.status(UNAUTHORIZED).send({
                message: CASE_UNAUTHORIZED_MESSAGE
            });
            next(err);
        } else if (!users) {
            res.status(NOT_FOUND).send({ message: CASE_NOT_FOUND_MESSAGE });
        } else {
            res.json({
                message: CASE_SUCCESS_MESSAGE,
                users
            });
        }
    });
};

exports.getUserById = (req, res, next) => {
    const messages = {
        CASE_UNAUTHORIZED_MESSAGE: "Wystąpił problem z autoryzacją!",
        CASE_NOT_FOUND_MESSAGE: "Nie znaleziono użytkownika!",
        CASE_SUCCESS_MESSAGE:
            "Wyszukiwanie użytkownika zakończyło się powodzeniem."
    };

    const {
        CASE_UNAUTHORIZED_MESSAGE,
        CASE_NOT_FOUND_MESSAGE,
        CASE_SUCCESS_MESSAGE
    } = messages;

    let userId = mongoose.Types.ObjectId(req.body.id);
    UserSchema.findOne({ _id: userId }, (err, selectedUser) => {
        if (err) {
            res.status(UNAUTHORIZED).send({
                message: CASE_UNAUTHORIZED_MESSAGE
            });
            next(err);
        } else if (!selectedUser) {
            res.status(NOT_FOUND).send({ message: CASE_NOT_FOUND_MESSAGE });
        } else {
            console.log(selectedUser);
            res.json({
                message: CASE_SUCCESS_MESSAGE,
                selectedUser
            });
        }
    });
};

exports.createUser = (req, res, next) => {
    const messages = {
        CASE_CONFLICT_MESSAGE: "Artykuł został skutecznie utworzony!",
        CASE_SUCCESS_MESSAGE:
            "Żądanie nie może zostać wykonane z powodu zaistnienia konfliktu!"
    };

    const { CASE_CONFLICT_MESSAGE, CASE_SUCCESS_MESSAGE } = messages;

    validateEmailAccessibility(req.body.email).then(valid => {
        if (valid) {
            UserSchema.create(
                {
                    name: req.body.name,
                    email: req.body.email,
                    password: req.body.password,
                    role: req.body.role,
                    date: req.body.date
                },
                (error, result) => {
                    if (error) next(error);
                    else
                        res.json({
                            message: CASE_SUCCESS_MESSAGE
                        });
                }
            );
        } else {
            res.status(CONFLICT).send({
                message: CASE_CONFLICT_MESSAGE
            });
        }
    });
};

exports.modifyUserData = (req, res, next) => {
    const messages = {
        CASE_UNAUTHORIZED_MESSAGE:
            "Wystąpił problem z autoryzacją podczas modyfikacji danych użytkownika!",
        CASE_NOT_FOUND_MESSAGE:
            "Nie znaleziono użytkownika o wybranym identyfikatorze!",
        CASE_SUCCESS_MESSAGE: "Dane użytkownika zostały zmodyfikowane!"
    };

    const {
        CASE_UNAUTHORIZED_MESSAGE,
        CASE_NOT_FOUND_MESSAGE,
        CASE_SUCCESS_MESSAGE
    } = messages;

    let userId = mongoose.Types.ObjectId(req.body.id);

    UserSchema.updateOne(
        { _id: userId },
        {
            $set: req.body
        },
        (err, selectedUser) => {
            if (err) {
                res.status(UNAUTHORIZED).send({
                    message: CASE_UNAUTHORIZED_MESSAGE
                });
                next(err);
            } else if (!selectedUser) {
                res.status(NOT_FOUND).send({
                    message: CASE_NOT_FOUND_MESSAGE
                });
            } else {
                console.log(selectedUser);
                res.json({
                    message: CASE_SUCCESS_MESSAGE,
                    selectedUser
                });
            }
        }
    );
};

exports.deleteUserData = (req, res, next) => {
    const messages = {
        CASE_UNAUTHORIZED_MESSAGE:
            "Wystąpił problem z autoryzacją podczas usuwania użytkownika!",
        CASE_NOT_FOUND_MESSAGE:
            "Nie ma użytkownika o wybranym identyfikatorze!",
        CASE_SUCCESS_MESSAGE: "Wybrany użytkownik został usunięty!"
    };

    const {
        CASE_UNAUTHORIZED_MESSAGE,
        CASE_NOT_FOUND_MESSAGE,
        CASE_SUCCESS_MESSAGE
    } = messages;

    let userId = mongoose.Types.ObjectId(req.body.id);

    UserSchema.deleteOne({ _id: userId }, (err, selectedUser) => {
        if (err) {
            res.status(UNAUTHORIZED).send({
                message: CASE_UNAUTHORIZED_MESSAGE
            });
            next(err);
        } else if (!selectedUser.deletedCount) {
            res.status(NOT_FOUND).send({
                message: CASE_NOT_FOUND_MESSAGE
            });
        } else {
            console.log(selectedUser);
            res.json({ message: CASE_SUCCESS_MESSAGE });
        }
    });
};
