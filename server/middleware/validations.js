const { check, validationResult } = require("express-validator");
const httpStatus = require("http-status");
// middleware
const addProductValidator = [
  check("model")
    .trim()
    .not()
    .isEmpty()
    .withMessage("You need to add a model")
    .bail()
    .isLength({ min: 3 })
    .withMessage("Minimum 3 Character required!")
    .bail(),
  check("brand")
    .trim()
    .not()
    .isEmpty()
    .withMessage("You need to add a brand")
    .bail(),
  check("frets")
    .trim()
    .not()
    .isEmpty()
    .withMessage("You need to add a frets")
    .bail(),
  check("woodtype")
    .trim()
    .not()
    .isEmpty()
    .withMessage("You need to add a woodtype")
    .bail(),
  check("description")
    .trim()
    .not()
    .isEmpty()
    .withMessage("You need to add a description")
    .bail(),
  check("price")
    .trim()
    .not()
    .isEmpty()
    .withMessage("You need to add a price")
    .bail(),
  check("available")
    .trim()
    .not()
    .isEmpty()
    .withMessage("You need to add a available")
    .bail(),
  check("itemsSold")
    .trim()
    .not()
    .isEmpty()
    .withMessage("You need to add a items Sold")
    .bail(),

  (req, res, next) => {
    const errors = validationResult(req);

    if (!errors.isEmpty()) {
      return res.status(httpStatus.BAD_REQUEST).json({
        errors: errors.array(),
      });
    }
    next();
  },
];

module.exports = {
  addProductValidator,
};
