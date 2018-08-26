"use strict";

const express = require('express');
const router = express.Router();

module.exports = (knex) => {
  const db = require('../db/dbHelpers')(knex);

  // create a like in the database
  router.post("/", async (req, res) => {
    const userId = req.session.userId;
    if (userId) {
      const resourceId = req.body.resourceId;
      console.log('create userid', userId);
      console.log('create resourceid', resourceId);
      await db.createLike(userId, resourceId);
      res.end();
    } else {
      console.log('not logged in');
      res.render('login');
    }
  });

  // delete a like from the database
  router.post("/delete", async (req, res) => {
    const userId = req.session.userId;
    if (userId) {
      const resourceId = req.body.resourceId;
      console.log('delete userid', userId);
      console.log('delete resourceid', resourceId);
      await db.deleteLike(userId, resourceId);
      res.end();
    } else {
      console.log('not logged in');
      res.render('login');
    }
  });
  return router;
}
