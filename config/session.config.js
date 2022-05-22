const { app } = require("../app");
const session = require("express-session");
const MongoStore = require("connect-mongo");
const mongoose = require("mongoose");
const mongoURL = require("../database/index");

app.use(
  session({
    secret: "je suis un secret",
    resave: false,
    saveUninitialized: false,
    cookie: {
      httpOnly: false,
      maxAge: 1000 * 60 * 60 * 24 * 14,
    },
    store: new MongoStore({
      mongooseConnection: mongoose.connection,
      ttl: 60 * 60 * 24 * 14,

      mongoUrl: mongoURL,
    }),
  })
);
