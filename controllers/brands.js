const { errorHandler } = require('../errorHandlers/dbErrorHandler');
const Brand = require('../models/brands');

exports.create = (req, res) => {
  const brand = new Brand(req.body);
  brand.save((err, data) => {
    if (err) {
      return res.status(400).json({
        error: errorHandler(err),
      });
    }
    res.json(data);
  });
};
