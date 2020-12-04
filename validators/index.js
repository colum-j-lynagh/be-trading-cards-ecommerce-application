exports.userSignUpValidator = (req, res) => {
  req.check('name', 'Please provide your Name').notEmpty();
  req
    .check('email', 'Email must be between 3 and 32 characters')
    .matches(/.+\@.+\..+/)
    .withMessage('Email not Valid')
    .isLength({ min: 4, max: 32 });
  req.check('password', 'Password is required').notEmpty();
  req.check('password').isLength({ min: 6 }).withMessage('Password must contain as least 6 characters').matches(/\d/).withMessage('Password must contain as least 1 number');

  const errors = req.validationErrors();
  if (errors) {
    const firstError = errors.map((errors) => errors.msg)[0];
    return res.status(400).json({ err: firstError });
  }
  next();
};
