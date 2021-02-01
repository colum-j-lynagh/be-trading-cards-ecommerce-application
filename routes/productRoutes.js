const express = require('express');
const router = express.Router();
const { create } = require('../controllers/products');
const { requireSignin, isAuth, isAdmin } = require('../controllers/auth');
const { userByID } = require('../controllers/user');

router.post('/product/create/:userId', requireSignin, isAuth, isAdmin, create);

router.param('userId', userByID);

module.exports = router;
