"use strict";

const express = require('express');
const router = express.Router();

module.exports = (knex) => {
  const db = require('../db/dbHelpers')(knex);

  router.get("/", async (req, res) => {
    const resources = await db.getAllResources();

    for (let post = 0; post < resources.length; post++) {
      let month = resources[post].created_at.getMonth()+1;
      let day = resources[post].created_at.getDate();
      let year = resources[post].created_at.getFullYear();
      resources[post].created_at = `${month}/${day}/${year}`;
      
      let userId = resources[post].user_id;
      let topicId = resources[post].topic_id;
      let comments = await db.getComments(topicId);

      for (let comment of comments) {
        let userProfile = await db.getProfile(comment.user_id);
        comment.user_name = userProfile.username;
      };

      resources[post].comments = comments;
      let userProfile = await db.getProfile(userId);
      resources[post].user_name = userProfile.username;
      switch (topicId) {
        case 1:
        resources[post].topic = "Coding";
            break;
        case 2:
        resources[post].topic = "Design";
            break;
        case 3:
        resources[post].topic = "Arts";
            break;
        case 4:
        resources[post].topic = "Food";
            break;
        case 5:
        resources[post].topic = "Engineering";
            break;
        case 6:
        resources[post].topic = "Writing";
            break;
        case 7:
        resources[post].topic = "Photography";
            break;
        case 8:
        resources[post].topic = "Sports";
            break;
        case 9:
        resources[post].topic = "Health";
            break;
        default:
        resources[post].topic = "";
      }
    }
    res.json(resources);
  });

  // render the create post page
  router.get("/new", async (req, res) => {
    const data = {}
    data.userId = req.session.userId;

    if (data.userId !== undefined) {
      const userProfile = await db.getProfile(req.session.userId);
      data.userName = userProfile.username;
    } 
    res.render("newpost", data);
  });

  // submit the create post form
  router.post("/new", async (req, res) => {
    const url = req.body.url;
    const title = req.body.title;
    const description = req.body.description;
    const userId = req.session.userId;
    const topicId = req.body.topic;
        
    await db.createResource(url, title, description, userId, topicId);
    res.redirect("/");
  });

  // submit comment
  router.post("/:id/comment", async (req, res) => {

    const resourceId = req.params.id;
    const userId = req.session.userId;
    const message = req.body.message;

    await db.createComment(message, userId, resourceId);
    res.redirect("/");
  });

  router.post("/:id/like", async (req, res) => {
    const userId = req.session.userId;
    const resourceId = req.params.id;
    if (await db.likeExists(userId, resourceId)) {
      await db.deleteLike(userId, resourceId);
    } else {
      await db.createLike(userId, resourceId);
    }
    res.redirect("index");
  });

  router.post("/:id/rate", async (req, res) => {
    const userId = req.session.userId;
    const resourceId = req.params.id;
    const stars = req.body.stars;
    if (await db.ratingExists(userId, resourceId)) {
      await db.updateRating(stars, userId, resourceId);
    } else {
      await db.createRating(stars, userId, resourceId);
    }
    await db.updateAverageRating(resourceId);
    res.redirect("index");
  });

  return router;
}
