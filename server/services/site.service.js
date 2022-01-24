const { Site } = require("../models/site");

const postSiteArgs = async (req) => {
  try {
    const site = new Site({
      ...req.body,
    });
    await site.save();
    return site;
  } catch (error) {
    throw error;
  }
};

module.exports = {
  postSiteArgs,
};
