import express from 'express';

const gplistRouter = express.Router();

gplistRouter.get('/', (req, res) => {
  res.render('page01', {
    title: 'GP List',
    headline: 'Grand Prix List',
    id: 'gplist',
    script: 'javascript/gplist.js'
  });
});

export { gplistRouter };
