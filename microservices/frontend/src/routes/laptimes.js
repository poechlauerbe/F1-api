import express from 'express';
const laptimesRouter = express.Router();
laptimesRouter.get('/', (req, res) => {
    res.render('laptimes', {
        title: 'Lap Times',
        headline: 'Lap Times',
        script: 'javascript/laptimes.js'
    });
});
export { laptimesRouter };
