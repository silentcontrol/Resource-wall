"use strict";

const express = require('express');
const router = express.Router();

module.exports = (knex) => {
  const db = require('../db/dbHelpers')(knex);
  
  // render the login page
  router.get("/", (req, res) => {
    res.render("login");
  });

  // submit login form
  router.post("/", async (req, res) => {
    const email = req.body.email;
    const userId = await db.getUserId(email);

    // check email against db
    if (await db.checkCredentials(email) === true) {
      // set cookie and redirect to home page
      req.session.userId = userId;
      res.redirect("/");
    }
  });
  return router;
}
