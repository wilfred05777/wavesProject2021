const httpStatus = require("http-status");
const { ApiError } = require("../middleware/apiError");
const { Brand } = require("../models/brand");

const addBrand = async (brandname) => {
  try {
    const brand = new Brand({
      name: brandname,
    });
    await brand.save();
    return brand;
  } catch (error) {
    throw error;
  }
};

const getBrandById = async (id) => {
  try {
    const brand = await Brand.findById(id);
    if (!brand) {
      throw new ApiError(httpStatus.NOT_FOUND, "Brand not found");
    }
    return brand;
  } catch (error) {
    throw error;
  }
};

const deleteBrandById = async (id) => {
  try {
    const brand = await Brand.findByIdAndRemove(id);
    return brand;
  } catch (error) {
    throw error;
  }
};

const getBrands = async (id) => {
  try {
  } catch (error) {
    throw error;
  }
};

module.exports = {
  addBrand,
  getBrandById,
  deleteBrandById,
  getBrands,
};
