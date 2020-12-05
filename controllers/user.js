const User = require('../models/user');
const jwt = require('jsonwebtoken');
const expressJwt = require('express-jwt');
const { errorHandler } = require('../errorHandlers/dbErrorHandler');
const user = require('../models/user');

exports.signup = (req, res) => {
  // console.log('req.body', req.body);
  const user = new User(req.body);
  user.save((err, user) => {
    if (err) {
      console.log('error');
      return res.status(400).json({
        error: errorHandler(err),
      });
    }
    user.salt = undefined;
    user.hashed_password = undefined;
    res.json({
      user,
    });
  });
};

exports.signin = (req, res) => {
  // find the user based on email
  const { email, password } = req.body;
  User.findOne({ email }, (err, user) => {
    if (err || !user) {
      return res.status(400).json({
        error: 'User with that Email is not registered.',
      });
    }
    if (!user.authenticate(password)) {
      return res.status(401).json({
        error: 'Email and password do not match.',
      });
    }
    const token = jwt.sign({ _id: user._id }, process.env.JWT_SECRET);
    res.cookie('t', token, { expire: new Date() + 9999 });
    const { _id, name, email, role } = user;
    return res.json({ token, user: { _id, email, name, role } });
  });
};
