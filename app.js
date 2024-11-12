const express = require("express");
const morgan = require("morgan");
const cors = require("cors");
const { default: helmet } = require("helmet");

const app = express();
const environment = process.env.NODE_ENV;
const targetUrl =
  environment === "production" ? "<Deploy Link here>" : "http://localhost:300";
if (environment === "development") {
  app.use(morgan("dev"));
}

const corsOption = {
  origin: (origin, callback) => {
    if (origin === targetUrl) {
      callback(null, true);
    } else {
      callback(new Error("Not allowed by CORS").message, false);
    }
  },
  methods: ["GET", "POST", "PUT"],
  maxAge: 3600,
  credentials: true,
};
app.use(express.json());
app.use(cors(corsOption));
app.use(helmet());
app.disable("x-powered-by");

module.exports = app;
