const { authService } = require("../services");

const authController = {
  async hello() {
    try {
      const userHello = authService.hello();
      console.log(userHello);
    } catch (error) {}
  },
};

module.exports = authController;
