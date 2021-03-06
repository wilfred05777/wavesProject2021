const httpStatus = require("http-status");
const { ApiError } = require("../middleware/apiError");
const { Product } = require("../models/product");
const mongoose = require("mongoose");
// const { mongoose } = require("mongoose"); lahi sya pag wala curly bracket di mo function ang moongose.Types upon search

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
    //   "min": 200,
    //   "max": 500,
    //   frets: 24,

    // };

    let aggQueryArray = [];

    if (req.body.keywords && req.body.keywords != "") {
      const re = new RegExp(`${req.body.keywords}`, "gi");
      aggQueryArray.push({
        $match: { model: { $regex: re } },
      });
    }
    //// error --- "message": "Cannot read properties of undefined (reading 'ObjectId')" or types
    if (req.body.brand && req.body.brand.length > 0) {
      let newBrandsArray = req.body.brand.map((item) =>
        // mongoose.Types.ObjectId(item)
        mongoose.Types.ObjectId(item)
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

    if (
      (req.body.min && req.body.min > 0) ||
      (req.body.max && req.body.max < 5000)
    ) {
      /// { $range: {price:[0,1000]}} /// not supported for free accounts
      if (req.body.min) {
        aggQueryArray.push({
          $match: { price: { $gt: req.body.min } },
        }); /// minimum price, guitar with a price greater than xxx
      }
      if (req.body.max) {
        aggQueryArray.push({
          $match: { price: { $lt: req.body.max } },
        }); /// maximum price, guitar with a price lower than xxx
      }
    }

    // "page":1,
    // "keywords":"iron",
    // "frets": [2],
    // "brand": ["61ecae37efd60bf754c38c0a","61ecae37efd60bf754c38c0a"],
    // "min": 100,
    // "max": 600

    //// add populate
    aggQueryArray.push(
      {
        $lookup: {
          from: "brands",
          localField: "brand",
          foreignField: "_id",
          as: "brand",
        },
      },
      {
        $unwind: "$brand",
      }
    );

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
