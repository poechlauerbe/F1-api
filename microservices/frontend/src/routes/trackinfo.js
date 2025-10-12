import express from 'express';
const trackinfoRouter = express.Router();
trackinfoRouter.get('/', (req, res) => {
    res.render('page01', {
        title: 'Track Info',
        headline: 'Track Info',
        id: 'trackinfo',
        extraID: 'map',
        preScript: 'https://unpkg.com/leaflet/dist/leaflet.js',
        script: 'javascript/trackinfo.js'
    });
});
export { trackinfoRouter };
