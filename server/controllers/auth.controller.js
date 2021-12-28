const { authService } = require("../services");

const authController = {
  async hello() {
    try {
      const userHello = authService.hello();
      console.log(userHello);
    } catch (error) {}
  },

  async register(req, res, next) {
    try {
    } catch (error) {}
  },
  async signin(req, res, next) {
    try {
    } catch (error) {}
  },

  async isauth(req, res, next) {
    try {
    } catch (error) {}
  },
};

module.exports = authController;
