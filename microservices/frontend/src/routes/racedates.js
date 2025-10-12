import express from 'express';
const racedatesRouter = express.Router();
racedatesRouter.get('/', (req, res) => {
    res.render('page01', {
        title: 'Race dates',
        headline: 'Race dates',
        id: 'racedates',
        script: 'javascript/racedates.js'
    });
});
export { racedatesRouter };
