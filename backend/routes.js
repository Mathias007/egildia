import express from "express";
import routesPaths from "./src/config/routesPaths";

import authController from "./src/controllers/auth";
import articlesController from "./src/controllers/articles";
import newsController from "./src/controllers/news";

import usersController from "./src/controllers/users";
import knightsController from "./src/controllers/knights";
import tzarControlles from "./src/controllers/tzar";

const { ARTICLES, AUTH, NEWS, KNIGHTS, TZAR, USERS } = routesPaths;

const router = express.Router();

// auth API
router.post(AUTH.LOGIN, authController.loginUser);
router.post(AUTH.REFRESH, authController.refreshTokenVerify);

// users API
router.get(
    USERS.LIST,
    authController.accessTokenVerify,
    usersController.getUsersList
);
router.post(USERS.SINGLE, usersController.getUserById);
router.post(USERS.ADD, usersController.createUser);
router.patch(USERS.EDIT, usersController.modifyUserData);
router.delete(USERS.REMOVE, usersController.deleteUserData);

// news API
router.get(NEWS.LIST, newsController.getNewsList);
router.post(NEWS.SINGLE, newsController.getNewsById);
router.post(NEWS.ADD, newsController.createNews);
router.patch(NEWS.EDIT, newsController.modifyNewsById);
router.delete(NEWS.REMOVE, newsController.deleteNewsById);

// articles API
router.get(ARTICLES.LIST, articlesController.getArticlesList);
router.post(ARTICLES.SINGLE, articlesController.getArticleById);
router.post(ARTICLES.SINGLE_KEY, articlesController.getArticleByAllocationKey);
router.post(ARTICLES.ADD, articlesController.createArticle);
router.patch(ARTICLES.EDIT, articlesController.modifyArticleById);
router.delete(ARTICLES.REMOVE, articlesController.deleteArticleById);

// content API's
// Knights and Merchants
router.get(KNIGHTS.BUILDINGS, knightsController.getBuildingsList);
router.get(KNIGHTS.UNITS, knightsController.getUnitsList);

// Tzar: The Burden of the Crown
router.get(TZAR.NATIONS, tzarControlles.getNationsList);
router.get(TZAR.SPELLS, tzarControlles.getSpellsList);
router.get(TZAR.TECHNOLOGIES, tzarControlles.getTechnologiesList);
router.get(TZAR.UNITS, tzarControlles.getUnitsList);

module.exports = router;
