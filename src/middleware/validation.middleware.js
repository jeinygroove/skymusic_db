const validator = require("../utils/validate");

const trackSchema = async (req, res, next) => {
  const validateRule = {
    name: "required|string",
    description: "required|string",
    price: "required",
  };

  await validator(req.body, validateRule, {}, (err, status) => {
    if (!status) {
      res.status(412).send({
        success: false,
        message: "Данные в неверном формате.",
        data: err,
      });
    } else {
      next();
    }
  }).catch((err) => console.log(err));
};

module.exports = {
  trackSchema,
};
