// server entry point

"use strict";

const path = require("path");
const express = require("express");
const volleyball = require("volleyball");
const morgan = require("morgan");
const app = express();

// static middleware
app.use(express.static(path.join(__dirname, "../public")));

// logging middleware
app.use(volleyball);
app.use(morgan("dev"));

// body parsing middleware
app.use(express.json());
app.use(express.urlencoded({extended: true}));

// send index.html by default
app.get("*", function(req, res, next) {
  res.sendFile(path.join(__dirname, "../public/index.html"));
});

// error handling middleware
app.use((err, req, res, next) => {
  console.error(err.stack);
  res
    .status(err.status || 500)
    .send(err.message || "You screwed up. Read the code.");
});

const port = process.env.PORT || 3000;
//useful for Heroku

app.listen(port, function() {
  console.log(`I am practicing active listening on port ${port}`);
});

module.exports = app;
