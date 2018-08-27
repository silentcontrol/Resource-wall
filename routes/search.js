"use strict";
const express = require('express');
const router = express.Router();
module.exports = (knex) => {
  const db = require('../db/dbHelpers')(knex);
  // render the home page
  router.get("/", async (req, res) => {
    const searchTerm = req.query.query;
    const serachResult = await db.searchResources(searchTerm);
    const data = {}

    data.userId = req.session.userId;
    data.searchTerm = searchTerm;
    data.serachResult = serachResult;
    if (data.userId !== undefined) {
      const userProfile = await db.getProfile(req.session.userId);
      data.userName = userProfile.username;
    }
    for (let i = 0; i < serachResult.length; i++) {
      let resultUserProfile = await db.getProfile(serachResult[i].user_id);
      serachResult[i].user_name = resultUserProfile.username;
    }
    res.render("search", data);
  });

  return router;
}