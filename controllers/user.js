const User = require('../models/user');

exports.userByID = (req, res, next, id) => {
  User.findById(id).exec((err, user) => {
    if (err || !user) {
      return res.status(400).json({
        error: 'User was not found',
      });
    }
    console.log('here1');
    console.log(user);
    req.profile = user;
    next();
  });
};
