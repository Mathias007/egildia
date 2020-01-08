import mongoose from "mongoose";
import UserSchema from "../models/users";

function validateEmailAccessibility(email) {
    return UserSchema.findOne({
        email: email
    }).then(result => {
        return !result;
    });
}

exports.getUsersList = (req, res, next) => {
    UserSchema.find({}, {}, (err, users) => {
        if (err || !users) {
            res.status(401).send({
                message:
                    "Wystąpił problem z autoryzacją przy pobieraniu listy użytkowników!"
            });
            next(err);
        } else if (!users) {
            res.status(404).send({ message: "Nie znaleziono użytkowników." });
        } else {
            res.json({
                message: "Lista użytkowników została znaleziona.",
                users
            });
        }
    });
};

exports.getUserById = (req, res, next) => {
    let userId = mongoose.Types.ObjectId(req.body.id);
    UserSchema.findOne({ _id: userId }, (err, selectedUser) => {
        if (err) {
            res.status(401).send({
                message: "Wystąpił problem z autoryzacją!"
            });
            next(err);
        } else if (!selectedUser) {
            res.status(404).send({ message: "Nie znaleziono użytkownika!" });
        } else {
            console.log(selectedUser);
            res.json({
                message: "Wyszukiwanie użytkownika zakończyło się powodzeniem.",
                selectedUser
            });
        }
    });
};

exports.createUser = (req, res, next) => {
    validateEmailAccessibility(req.body.email).then(valid => {
        if (valid) {
            UserSchema.create(
                {
                    name: req.body.name,
                    email: req.body.email,
                    password: req.body.password
                },
                (error, result) => {
                    if (error) next(error);
                    else
                        res.json({
                            message: "Użytkownik został utworzony!"
                        });
                }
            );
        } else {
            res.status(409).send({
                message: "Żądanie nie może zostać wykonane z powodu zaistnienia konfliktu!"
            });
        }
    });
};

exports.modifyUserData = (req, res, next) => {
    let userId = mongoose.Types.ObjectId(req.body.id);

    UserSchema.updateOne(
        { _id: userId },
        {
            $set: req.body
        },
        (err, selectedUser) => {
            if (err) {
                res.status(401).send({
                    message:
                        "Wystąpił problem z autoryzacją podczas modyfikacji danych użytkownika!"
                });
                next(err);
            } else if (!selectedUser) {
                res.status(404).send({
                    message:
                        "Nie znaleziono użytkownika o wybranym identyfikatorze!"
                });
            } else {
                console.log(selectedUser);
                res.json({
                    message: "Użytkownik został zmodyfikowany!",
                    selectedUser
                });
            }
        }
    );
};

exports.deleteUserData = (req, res, next) => {
    let userId = mongoose.Types.ObjectId(req.body.id);

    UserSchema.deleteOne({ _id: userId }, (err, selectedUser) => {
        if (err) {
            res.status(401).send({
                message:
                    "Wystąpił problem z autoryzacją podczas usuwania użytkownika!"
            });
            next(err);
        } else if (!selectedUser.deletedCount) {
            res.status(404).send({
                message: "Nie ma użytkownika o wybranym identyfikatorze!"
            });
        } else {
            console.log(selectedUser);
            res.json({ message: "Wybrany użytkownik został usunięty!" });
        }
    });
};
