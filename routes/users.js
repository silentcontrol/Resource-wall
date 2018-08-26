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
<<<<<<< HEAD
    } 
=======
      data.bio = userProfile.bio;
    }

>>>>>>> 8bcdaf75c3e3cb065be26e28e7fd4f4a1400da41
    res.render("profile", data);
  });

  // update user profile
<<<<<<< HEAD
  router.put("/:id", async (req, res) => {
    const userId = req.params.id;
    const userName = req.body.username;
    const bio = req.body.bio;

    await updateProfile(userId, userName, bio);
    const profile = await db.getProfile(userId);
    res.render("profile", profile);
=======
  router.post("/:id", async (req, res) => {
    const userId = req.params.id;
    const bio = req.body.bio;
    await db.updateProfile(userId, bio);
>>>>>>> 8bcdaf75c3e3cb065be26e28e7fd4f4a1400da41
  });

  // display all resources created by userid = id
  router.get("/:id/resources", async (req, res) => {
    const userId = req.params.id;
    const resource = await db.getMyResources(userId);
    res.render("resource", resource);
  });

  // display all likes created by userid = id
  router.get("/:id/likes", async (req, res) => {
    const userId = req.params.id;
    const likes = await db.getMyLikes(userId);
    res.render("resource", likes);
  });

  return router;
}
