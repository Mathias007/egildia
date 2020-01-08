import UserSchema from "../models/users";
// import bcrypt from 'bcrypt'
import jwt from "jsonwebtoken";
import { TOKEN_SECRET_JWT } from "../config/config";

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
    UserSchema.findOne(
        {
            name: req.body.name,
            password: req.body.password
        },
        (err, user) => {
            console.log(user);
            if (err || !user) {
                res.status(401).send({
                    message: "Wystąpił problem z autoryzacją!"
                });
                next(err);
            } else if (!user) {
                res.status(404).send({
                    message: "Nie znaleziono użytkownika!"
                });
                // if (bcrypt.compareSync(req.body.password, user.password)) {
                // } else {
                // res.status(401).send({
                //     message: "Invalid email/password"
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
    if (!req.headers.authorization) {
        return res.status(401).send({
            error: "Token is missing"
        });
    }
    const BEARER = "Bearer";
    const AUTHORIZATION_TOKEN = req.headers.authorization.split(" ");
    if (AUTHORIZATION_TOKEN[0] !== BEARER) {
        return res.status(401).send({
            error: "Token is not complete"
        });
    }
    jwt.verify(AUTHORIZATION_TOKEN[1], TOKEN_SECRET_JWT, function(err) {
        if (err) {
            return res.status(401).send({
                error: "Token is invalid"
            });
        }
        next();
    });
};

// Verify refreshToken
exports.refreshTokenVerify = (req, res, next) => {
    if (!req.body.refreshToken) {
        res.status(401).send({
            message: "Token refresh is missing"
        });
    }
    const BEARER = "Bearer";
    const REFRESH_TOKEN = req.body.refreshToken.split(" ");
    if (REFRESH_TOKEN[0] !== BEARER) {
        return res.status(401).send({
            error: "Token is not complete"
        });
    }
    jwt.verify(REFRESH_TOKEN[1], TOKEN_SECRET_JWT, function(err, payload) {
        if (err) {
            return res.status(401).send({
                error: "Token refresh is invalid"
            });
        }
        UserSchema.findById(payload.sub, function(err, person) {
            if (!person) {
                return res.status(401).send({
                    error: "Person not found"
                });
            }
            return res.json(generateTokens(req, person));
        });
    });
};
