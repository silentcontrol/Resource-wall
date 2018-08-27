"use strict";

const express = require('express');
const router = express.Router();

module.exports = (knex) => {
  const db = require('../db/dbHelpers')(knex);

  // render the home page
  router.get("/", async (req, res) => {
    const searchTerm = req.query.query;
    const resources = await db.searchResources(searchTerm);

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

      //setting variables to inject into class declarations in ejs
      let starFills = ['','','','',''];
      if (req.session.userId && await db.ratingExists(req.session.userId, resources[post].id)) {
        const rating = await db.getRating(req.session.userId, resources[post].id);
        for (let i = 0; i < starFills.length; i++) {
          if (i <= rating -1) {
            starFills[i] = 'filled';
          }
        }
        resources[post].rated = 'rated';
      } else {
        const roundedRating = Math.round(resources[post].average_rating);
        for (let i = 0; i < starFills.length; i++) {
          if (i <= roundedRating -1) {
            starFills[i] = 'filled';
          }
        }
        resources[post].rated = '';
      }
      resources[post].starFills = starFills;

      if (req.session.userId && await db.likeExists(req.session.userId, resources[post].id)) {
        resources[post].liked = 'liked';
      } else {
        resources[post].liked = '';
      }
    }

    res.json(resources);
  });


  return router;
}
