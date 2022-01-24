const express = require("express");
const authRoute = require("./auth.route");
const router = express.Router();
const brandsRoute = require("./brand.route");
const userRoute = require("./users.route");
const productsRoute = require("./product.route");
const siteRoute = require("./site.route");

const routesIndex = [
  {
    path: "/auth",
    route: authRoute,
  },
  {
    path: "/users",
    route: userRoute,
  },
  {
    path: "/brands",
    route: brandsRoute,
  },
  {
    path: "/products",
    route: productsRoute,
  },
  {
    path: "/site",
    route: siteRoute,
  },
];

routesIndex.forEach((route) => {
  router.use(route.path, route.route);
});

module.exports = router;
