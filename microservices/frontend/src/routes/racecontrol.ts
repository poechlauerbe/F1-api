import express from 'express';

const racecontrolRouter = express.Router();

racecontrolRouter.get('/', (req, res) => {
  res.render('racecontrol', {
    title: 'Race Control',
    headline: 'Race Control',
    id: 'race-control',
    script: 'javascript/racecontrol.js'
  });
});

export { racecontrolRouter };
