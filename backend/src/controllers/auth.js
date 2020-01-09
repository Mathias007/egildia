import jwt from "jsonwebtoken";
// import bcrypt from 'bcrypt'
import config from "../config/config";
import resStatuses from "../config/resStatuses";

import UserSchema from "../models/users";

const { TOKEN_SECRET_JWT } = config;
const { UNAUTHORIZED, NOT_FOUND } = resStatuses;

// Generate token
const generateTokens = (req, user) => {
    const ACCESS_TOKEN = jwt.sign(
        {
            sub: user._id,
            rol: user.role,
            type: "ACCESS_TOKEN"
        },
        TOKEN_SECRET_JWT,
        {
            expiresIn: 120
        }
    );
    const REFRESH_TOKEN = jwt.sign(
        {
            sub: user._id,
            rol: user.role,
            type: "REFRESH_TOKEN"
        },
        TOKEN_SECRET_JWT,
        {
            expiresIn: 480
        }
    );
    return {
        accessToken: ACCESS_TOKEN,
        refreshToken: REFRESH_TOKEN
    };
};

// Controller login user
exports.loginUser = (req, res, next) => {
    const messages = {
        CASE_UNAUTHORIZED_MESSAGE: "Wystąpił problem z autoryzacją!",
        CASE_NOT_FOUND_MESSAGE: "Nie znaleziono użytkownika!"
        // CASE_INVALID_DATA: "Dane logowania są niepoprawne!",
        // CASE_SUCCESS_MESSAGE: "Logowanie zakończyło się sukcesem."
    };

    const {
        CASE_UNAUTHORIZED_MESSAGE,
        CASE_NOT_FOUND_MESSAGE
        // CASE_INVALID_DATA,
        // CASE_SUCCESS_MESSAGE
    } = messages;

    UserSchema.findOne(
        {
            name: req.body.name,
            password: req.body.password
        },
        (err, user) => {
            console.log(user);
            if (err || !user) {
                res.status(UNAUTHORIZED).send({
                    message: CASE_UNAUTHORIZED_MESSAGE
                });
                next(err);
            } else if (!user) {
                res.status(NOT_FOUND).send({
                    message: CASE_NOT_FOUND_MESSAGE
                });
                // if (bcrypt.compareSync(req.body.password, user.password)) {
                // } else {
                // res.status(CASE_UNAUTHORIZED_MESSAGE).send({
                //     message: CASE_INVALID_DATA
                // })
                // }
            } else {
                console.log(user);
                res.json(generateTokens(req, user));
            }
        }
    ).select("password");
};

// Verify accessToken
exports.accessTokenVerify = (req, res, next) => {
    const messages = {
        CASE_TOKEN_MISSING: "Token dostępowy zaginął w akcji!",
        CASE_TOKEN_INCOMPLETE: "Token dostępowy jest niekompletny!",
        CASE_TOKEN_INVALID: "Token dostępowy jest niepoprawny!"
    };

    const {
        CASE_TOKEN_MISSING,
        CASE_TOKEN_INCOMPLETE,
        CASE_TOKEN_INVALID
    } = messages;

    if (!req.headers.authorization) {
        return res.status(UNAUTHORIZED).send({
            message: CASE_TOKEN_MISSING
        });
    }
    const BEARER = "Bearer";
    const AUTHORIZATION_TOKEN = req.headers.authorization.split(" ");
    if (AUTHORIZATION_TOKEN[0] !== BEARER) {
        return res.status(UNAUTHORIZED).send({
            message: CASE_TOKEN_INCOMPLETE
        });
    }
    jwt.verify(AUTHORIZATION_TOKEN[1], TOKEN_SECRET_JWT, function(err) {
        if (err) {
            return res.status(UNAUTHORIZED).send({
                message: CASE_TOKEN_INVALID
            });
        }
        next();
    });
};

// Verify refreshToken
exports.refreshTokenVerify = (req, res, next) => {
    const messages = {
        CASE_TOKEN_MISSING: "Token odświeżeniowy zaginął w akcji!",
        CASE_TOKEN_INCOMPLETE: "Token odświeżeniowy jest niekompletny!",
        CASE_TOKEN_INVALID: "Token odświeżeniowy jest niepoprawny!",
        CASE_USER_NOT_FOUND: "Użytkownik nie istnieje!"
    };

    const {
        CASE_TOKEN_MISSING,
        CASE_TOKEN_INCOMPLETE,
        CASE_TOKEN_INVALID,
        CASE_USER_NOT_FOUND
    } = messages;
    if (!req.body.refreshToken) {
        res.status(UNAUTHORIZED).send({
            message: CASE_TOKEN_MISSING
        });
    }
    const BEARER = "Bearer";
    const REFRESH_TOKEN = req.body.refreshToken.split(" ");
    if (REFRESH_TOKEN[0] !== BEARER) {
        return res.status(UNAUTHORIZED).send({
            message: CASE_TOKEN_INCOMPLETE
        });
    }
    jwt.verify(REFRESH_TOKEN[1], TOKEN_SECRET_JWT, function(err, payload) {
        if (err) {
            return res.status(UNAUTHORIZED).send({
                message: CASE_TOKEN_INVALID
            });
        }
        UserSchema.findById(payload.sub, function(err, person) {
            if (!person) {
                return res.status(UNAUTHORIZED).send({
                    message: CASE_USER_NOT_FOUND
                });
            }
            return res.json(generateTokens(req, person));
        });
    });
};
