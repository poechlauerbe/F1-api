import express from 'express';

const impressumRouter = express.Router();

impressumRouter.get('/', (req, res) => {
  res.render('page01', {
    title: 'Impressum',
    headline: 'Impressum',
    id: 'impressum',
    script: 'javascript/impressum.js'
  });
});

export { impressumRouter };
