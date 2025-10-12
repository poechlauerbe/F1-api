import express from 'express';
const pitRouter = express.Router();
pitRouter.get('/', (req, res) => {
    res.render('page01', {
        title: 'Pit Stops',
        headline: 'Pit Stops',
        id: 'pit',
        script: 'javascript/pit.js'
    });
});
export { pitRouter };
