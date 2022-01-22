const httpStatus = require("http-status");
const { ApiError } = require("../middleware/apiError");
const { User } = require("../models/user");

const findUserByEmail = async (email) => {
  return await User.findOne({
    email: email,
  });
};

const findUserById = async (_id) => {
  return await User.findById(_id);
};

const updateUserProfile = async (req) => {
  try {
    const user = await User.findOneAndUpdate(
      { _id: req.user._id },
      {
        $set: {
          ...req.body.data, /// make sure to validate what you want to patch!!! edit
        },
      },
      { new: true }
    );

    if (!user) {
      throw new ApiError(httpStatus.NOT_FOUND, "USER NOT FOUND");
    }
    return user;
  } catch (error) {
    throw error;
  }
};

module.exports = {
  findUserByEmail,
  findUserById,
  updateUserProfile,
};
