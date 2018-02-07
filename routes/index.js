const express = require('express');

const router = express.Router();

const appController = require('../controllers/appController');
const authController = require('../controllers/authController');
const userController = require('../controllers/userController');

/*
GET home page.
*/
router.get('/', appController.getIndexPage);

/*
GET Login page.
*/
router.get(
  '/login',
  authController.notLoggedIn,
  authController.getLoginPage,
);

/*
GET Register page.
*/
router.get(
  '/register',
  authController.notLoggedIn,
  userController.getRegisterPage,
);

/*
GET Profile page.
*/
router.get(
  '/profile',
  authController.isLoggedIn,
  userController.getProfilePage,
);

/*
Post Login User
*/
router.post(
  '/login',
  authController.notLoggedIn,
  authController.login,
);

/*
Post Register User
*/
router.post(
  '/register',
  authController.notLoggedIn,
  userController.validateRegister,
  userController.checkUserExists,
  userController.registerUser,
  authController.login,
);

/*
Logout user.
*/
router.get(
  '/logout',
  authController.isLoggedIn,
  authController.logout,
);

module.exports = router;
