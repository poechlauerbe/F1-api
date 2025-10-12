import express from 'express';

const leaderboardRouter = express.Router();

leaderboardRouter.get('/', (req, res) => {
  res.render('page01', {
    title: 'Race Leaderboard',
    headline: 'Race Leaderboard',
    id: 'positions',
    script: 'javascript/leaderboard.js'
  });
});

export { leaderboardRouter };
