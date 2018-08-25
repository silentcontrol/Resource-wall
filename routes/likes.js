"use strict";

const express = require('express');
const router = express.Router();

module.exports = (knex) => {
  const db = require('../db/dbHelpers')(knex);

  // create a like in the database
  router.post("/", (req, res) => {
    console.log('received post to /likes');
    console.log('LOOK HERE', req.body.resourceId);
    console.log('LOOK HERE', req.session.userId);
    res.end();
  });

  // delete a like
  router.post("/delete", (req, res) => {
    console.log('received post to /likes/delete');
    console.log('LOOK HERE', req.body.resourceId);
    console.log('LOOK HERE', req.session.userId);

      // req.session.userId = userId;
    res.end();
  });
  return router;
}
