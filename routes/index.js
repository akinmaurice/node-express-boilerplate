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


module.exports = router;
