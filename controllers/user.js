const User = require('../models/user');
const { errorHandler } = require('../errorHandlers/dbErrorHandler');

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

    res.json({
      user,
    });
  });
};
