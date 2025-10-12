import express from 'express';
const driverRouter = express.Router();
driverRouter.get('/', (req, res) => {
    res.render('page01', {
        title: 'Drivers',
        headline: 'Drivers',
        id: 'drivers',
        script: 'javascript/drivers.js'
    });
});
export { driverRouter };
