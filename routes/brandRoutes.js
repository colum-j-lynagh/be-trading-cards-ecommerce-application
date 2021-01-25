const express = require('express');
const router = express.Router();
const { create } = require('../controllers/brands');
const { requireSignin, isAuth, isAdmin } = require('../controllers/auth');
const { userByID } = require('../controllers/user');

router.post('/brand/create/:userId', requireSignin, isAuth, isAdmin, create);

router.param('userId', userByID);

module.exports = router;
