const httpStatus = require("http-status");
const { mongoose, Mongoose } = require("mongoose");
const { ApiError } = require("../middleware/apiError");
const { Product } = require("../models/product");

const addProduct = async (body) => {
  try {
    const product = new Product({
      ...body,
    });
    await product.save();
    return product;
  } catch (error) {
    throw error;
  }
};

const getProductById = async (_id) => {
  try {
    const product = await Product.findById(_id).populate("brand");
    if (!product) throw new ApiError(httpStatus.NOT_FOUND, "Product not found");
    return product;
  } catch (error) {
    throw error;
  }
};

const updateProductById = async (_id, body) => {
  try {
    const product = await Product.findOneAndUpdate(
      { _id },
      { $set: body },
      { new: true }
    );
    if (!product) throw new ApiError(httpStatus.NOT_FOUND, "Product not found");
    return product;
  } catch (error) {
    throw error;
  }
};

const deleteProductById = async (_id) => {
  try {
    // const product = await Product.findOneAndDelete(
    //   { _id },
    //   { $set: body },
    //   { new: true }
    // );
    const product = await Product.findByIdAndRemove(_id);
    if (!product) throw new ApiError(httpStatus.NOT_FOUND, "Product not found");
    return product;
  } catch (error) {
    throw error;
  }
};

const allProducts = async (req) => {
  try {
    const products = await Product.find({})
      .populate("brand")
      .sort([
        // ["_id", req.query.order]
        [req.query.sortBy, req.query.order],
      ])
      .limit(parseInt(req.query.limit));
    return products;
  } catch (error) {
    throw error;
  }
};

const paginateProducts = async (req) => {
  try {
    /// search by
    // const example = {
    //   keywords: "elite",
    ///// brand is string needs to converted to id/number
    //   brand: ["objectId(61ed00d1bd6e46b5d6d16614)", "61ed00d1bd6e46b5d6d16614"],
    //   lt: 200,
    //   gt: 500,
    //   frets: 24,

    // };

    let aggQueryArray = [];

    if (req.body.keywords && req.body.keywords != "") {
      const re = new RegExp(`${req.body.keywords}`, "gi");
      aggQueryArray.push({
        $match: { model: { $regex: re } },
      });
    }

    if (req.body.brand && req.body.brand.length > 0) {
      let newBrandsArray = req.body.brand.map((item) =>
        // mongoose.Types.ObjectId(item)
        Mongoose.Types.ObjectId(item)
      );
      aggQueryArray.push({
        $match: { brand: { $in: newBrandsArray } },
      });
    }

    if (req.body.frets && req.body.frets.length > 0) {
      aggQueryArray.push({
        $match: { frets: { $in: req.body.frets } },
      });
    }
    //////

    let aggQuery = Product.aggregate(aggQueryArray);
    const options = {
      page: req.body.page,
      limit: 2,
      sort: { date: "desc" },
    };

    const products = await Product.aggregatePaginate(aggQuery, options);
    return products;
  } catch (error) {
    throw error;
  }
};

module.exports = {
  addProduct,
  getProductById,
  updateProductById,
  deleteProductById,
  allProducts,
  paginateProducts,
};
