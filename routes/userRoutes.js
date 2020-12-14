const express = require('express');
const router = express.Router();
const { userByID } = require('../controllers/user');
const { requireSignin } = require('../controllers/auth');

router.get('/secret/:userId', requireSignin, (req, res) => {
  res.json({
    user: req.profile,
  });
});

router.param('userId', userByID);

module.exports = router;
