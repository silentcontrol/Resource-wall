"use strict";

const express = require('express');
const router = express.Router();
const bcrypt = require('bcryptjs');

module.exports = (knex) => {
  const db = require('../db/dbHelpers')(knex);

  // render the registration page
  router.get("/", (req, res) => {
    res.render('register');
  });

  // submit registration form
  // add user information to database, set cookie, redirect to home page
  router.post("/", async (req, res) => {
    const email = req.body.email;
    const password = bcrypt.hashSync(req.body.password, 10);
    const userName = req.body.username;
    const bio = req.body.bio;

    // create user in db and get the user id
    await db.createUser(userName, password, email, bio);
    const userId = await db.getUserId(email);

    req.session.userId = userId;
    res.redirect("/");
  });

  return router;
}
