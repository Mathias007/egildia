import express from "express";
import config from "./src/config/config";

import authController from "./src/controllers/auth";
import articlesController from "./src/controllers/articles";
import newsController from "./src/controllers/news";

import usersController from "./src/controllers/users";
import knightsController from "./src/controllers/knights";
import tzarControlles from "./src/controllers/tzar";

const { ROUTES } = config;
const { API, ARTICLES, NEWS, KNIGHTS, TZAR, USERS } = ROUTES;

const router = express.Router();

// auth API
router.post(`/${API}/login`, authController.loginUser);
router.post(`/${API}/refresh`, authController.refreshTokenVerify);

// users API
router.get(
    `/${API}/${USERS}/list`,
    // authController.accessTokenVerify,
    usersController.getUsersList
);
router.post(`/${API}/${USERS}/single`, usersController.getUserById);
router.post(`/${API}/${USERS}/add`, usersController.createUser);
router.patch(`/${API}/${USERS}/edit`, usersController.modifyUserData);
router.delete(`/${API}/${USERS}/remove`, usersController.deleteUserData);

// news API
router.get(`/${API}/${NEWS}/list`, newsController.getNewsList);
router.post(`/${API}/${NEWS}/single`, newsController.getNewsById);
router.post(`/${API}/${NEWS}/add`, newsController.createNews);
router.patch(`/${API}/${NEWS}/edit`, newsController.modifyNewsById);
router.delete(`/${API}/${NEWS}/remove`, newsController.deleteNewsById);

// articles API
router.get(`/${API}/${ARTICLES}/list`, articlesController.getArticlesList);
router.post(`/${API}/${ARTICLES}/single`, articlesController.getArticleById);
router.post(
    `/${API}/${ARTICLES}/single-key`,
    articlesController.getArticleByAllocationKey
);
router.post(`/${API}/${ARTICLES}/add`, articlesController.createArticle);
router.patch(`/${API}/${ARTICLES}/edit`, articlesController.modifyArticleById);
router.delete(
    `/${API}/${ARTICLES}/remove`,
    articlesController.deleteArticleById
);

// content API's
// Knights and Merchants
router.get(`/${API}/${KNIGHTS}/buildings`, knightsController.getBuildingsList);
router.get(`/${API}/${KNIGHTS}/units`, knightsController.getUnitsList);

// Tzar: The Burden of the Crown
router.get(`/${API}/${TZAR}/nations`, tzarControlles.getNationsList);
router.get(`/${API}/${TZAR}/units`, tzarControlles.getUnitsList);
router.get(`/${API}/${TZAR}/spells`, tzarControlles.getSpellsList);
router.get(`/${API}/${TZAR}/technologies`, tzarControlles.getTechnologiesList);

module.exports = router;
