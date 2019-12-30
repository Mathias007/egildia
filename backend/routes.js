import express from "express";
import config from "./config";

import authController from "./src/controllers/auth";
import usersController from "./src/controllers/users";
import knightsController from "./src/controllers/knights";
import tzarControlles from "./src/controllers/tzar";

const { ROUTES } = config;
const { API, KNIGHTS, TZAR } = ROUTES;

const router = express.Router();

// auth API 
router.post(`/${API}/login`, authController.loginUser);
router.post(`/${API}/register`, authController.createUser);
router.post(`/${API}/refresh`, authController.refreshTokenVerify);
router.get(
    `/${API}/users`,
    authController.accessTokenVerify,
    usersController.getUserList
);

// content API's
// Knights and Merchants
router.get(`/${API}/${KNIGHTS}/buildings`, knightsController.getBuildingsList);
router.get(`/${API}/${KNIGHTS}/units`, knightsController.getUnitsList);

// Tzar: The Burden of the Crown
router.get(`/${API}/${TZAR}/nations`, tzarControlles.getBuildingsList);
router.get(`/${API}/${TZAR}/units`, tzarControlles.getUnitsList);
router.get(`/${API}/${TZAR}/spells`, tzarControlles.getSpellsList);
router.get(`/${API}/${TZAR}/technologies`, tzarControlles.getTechnologiesList);

module.exports = router;
