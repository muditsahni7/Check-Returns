const express = require("express");
const logger = require("morgan");
const cookieParser = require("cookie-parser");
const cors = require("cors");

const FRONTEND_URL = "https://check-my-returns.vercel.app";

module.exports = (app) => {
  app.set("trust proxy", 1);
  app.use(
    cors({
      origin: function (origin, callback) {
        if (!origin || origin === FRONTEND_URL) {
          callback(null, true);
        } else {
          callback(new Error("Not allowed by CORS"));
        }
      },
    })
  );


  app.use(logger("dev"));

  app.use(express.json());
  app.use(express.urlencoded({ extended: false }));
  app.use(cookieParser());
};
