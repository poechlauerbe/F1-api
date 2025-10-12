import express from 'express';
const teamradioRouter = express.Router();
teamradioRouter.get('/', (req, res) => {
    res.render('page01', {
        title: 'Team Radio',
        headline: 'Team Radio',
        id: 'teamradio',
        script: 'javascript/teamradio.js'
    });
});
export { teamradioRouter };
