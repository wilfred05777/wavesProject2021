const { User } = require("../models/user");
const httpStatus = require("http-status");
const { ApiError } = require("../middleware/apiError");

const createUser = async (email, password) => {
  try {
    if (await User.emailTaken(email)) {
      throw new ApiError(httpStatus.BAD_REQUEST, "Sorry Email Taken");
      // console.log("Email already in DB");
    } else {
      console.log("registered successfully in db");
      const user = new User({
        email,
        password,
      });
      await user.save();
      return user;
    }
  } catch (error) {
    throw error;
  }
};

const genAuthToken = (user) => {
  const token = user.generateAuthToken();
  return token;
};

module.exports = {
  createUser,
  genAuthToken,
};
