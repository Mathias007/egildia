import express from 'express'
import authController from './src/controllers/auth'
import usersController from './src/controllers/users'
import knightsController from "./src/controllers/knights"

const router = express.Router();

router.post('/api/login', authController.loginUser);
router.post('/api/refresh', authController.refreshTokenVerify);

// secure router 
router.get('/api/users', authController.accessTokenVerify, usersController.getUserList);
router.post('/api/register', authController.accessTokenVerify, authController.createUser);

// content API's
router.get('/api/knights/buildings', knightsController.getBuildingsList);
router.get('/api/knights/units', knightsController.getUnitsList);

module.exports = router;
