"use strict";

const express = require('express');
const router = express.Router();

module.exports = () => {
  // after the user logs out, clear cookie and redirect to the home page
  router.post("/", (req, res) => {
    req.session = null;
    res.redirect("/");
  });

  return router;
}