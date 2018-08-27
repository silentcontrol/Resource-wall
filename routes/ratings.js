"use strict";

const express = require('express');
const router = express.Router();

module.exports = (knex) => {
  const db = require('../db/dbHelpers')(knex);

  // create a rating in the database
  router.post("/", async (req, res) => {
    const userId = req.session.userId;
    if (userId) {
      const stars = req.body.rating;
      const resourceId = req.body.resourceId;
      console.log('create stars', stars);
      console.log('create userid', userId);
      console.log('create resourceid', resourceId);
      await db.createRating(stars, userId, resourceId);
      const p = await db.updateAverageRating(resourceId);
      console.log('p', p);
      res.json({'newAverage': p});
      // res.append('newAverage', p);
      // res.end();
    } else {
      console.log('not logged in');
      res.render('login');
    }
  });

  // update a rating in the database
  router.post("/update", async (req, res) => {
    const userId = req.session.userId;
    if (userId) {
      const stars = req.body.rating;
      const resourceId = req.body.resourceId;
      console.log('create stars', stars);
      console.log('create userid', userId);
      console.log('create resourceid', resourceId);
      await db.updateRating(stars, userId, resourceId);
      const p = await db.updateAverageRating(resourceId);
      console.log('p', p);
      res.json({'newAverage': p});
      // res.end();
    } else {
      console.log('not logged in');
      res.render('login');
    }
  });
  return router;
}
