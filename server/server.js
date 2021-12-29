const express = require("express");
const app = express();
require("dotenv").config();

const mongoose = require("mongoose");
const xss = require("xss-clean");
const mongoSanitize = require("express-mongo-sanitize");
const routes = require("./routes");

const { handleError, convertToApiError } = require("./middleware/apiError");

// const mongoUri = `mongodb+srv://admin:adminwavesproject@cluster0.trif6.mongodb.net/myFirstDatabase?retryWrites=true&w=majority`;
// const mongoUri = `mongodb+srv://wilfred:wilfredadmin@cluster0.trif6.mongodb.net/myFirstDatabase?retryWrites=true&w=majority`;

const mongoUri = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@${process.env.DB_HOST}?retryWrites=true&w=majority`;

mongoose.connect(mongoUri, {
  useUnifiedTopology: true,
  useNewUrlParser: true,
  // useCreatendex: true,
  // useFindAndModify: false,
});

//// body parse
app.use(express.json());

// Middleware Aanitize
app.use(xss());
app.use(mongoSanitize());

// routes
app.use("/api", routes);

// HANDLE ERRORS
//// if the error not recognized.... convert to api error
app.use(convertToApiError);
app.use((err, req, res, next) => {
  handleError(err, res);
});
const port = process.env.PORT || 3001;

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
