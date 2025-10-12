import express from 'express';

const singleDriverRouter = express.Router();

singleDriverRouter.get('/', (req, res) => {
  res.render('singledriver', {
    title: 'Single Driver',
    headline: 'Single Driver',
    id: 'singledriver'
  });
});

export { singleDriverRouter };
