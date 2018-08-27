"use strict";

const express = require('express');
const router = express.Router();

module.exports = (knex) => {
  const db = require('../db/dbHelpers')(knex);

  // render user profile page
  router.get("/:id", async (req, res) => {
    const data = {}
    data.userId = req.session.userId;

    if (data.userId !== undefined) {
      const userProfile = await db.getProfile(req.session.userId);
      data.userName = userProfile.username;
      data.bio = userProfile.bio;
    } 
    res.render("profile", data);
  });

  // submit update user profile request
  router.post("/:id", async (req, res) => {
    const userId = req.params.id;
    const bio = req.body.bio;

    await db.updateProfile(userId, bio);
    res.redirect("profile")
  });

  // display all resources created by user = id
  router.get("/:id/resources", async (req, res) => {
    const userId = req.params.id;
    const serachResult = await db.getMyResources(userId);
    const data = {}

    data.userId = userId;
    data.serachResult = serachResult;
    if (data.userId !== undefined) {
      const userProfile = await db.getProfile(req.session.userId);
      data.userName = userProfile.username;
    }
    for (let i = 0; i < serachResult.length; i++) {
      let resultUserProfile = await db.getProfile(serachResult[i].user_id);
      serachResult[i].user_name = resultUserProfile.username;
    }
    res.render("myposts", data);
  });

  // display all liked posts by user = id
  router.get("/:id/likes", async (req, res) => {
    const userId = req.params.id;
    const serachResult = await db.getMyLikes(userId);
    const data = {}

    data.userId = userId;
    data.serachResult = serachResult;
    if (data.userId !== undefined) {
      const userProfile = await db.getProfile(req.session.userId);
      data.userName = userProfile.username;
    }
    for (let i = 0; i < serachResult.length; i++) {
      let resultUserProfile = await db.getProfile(serachResult[i].user_id);
      serachResult[i].user_name = resultUserProfile.username;
    }
    res.render("mylikes", data);
  });

  return router;
}
