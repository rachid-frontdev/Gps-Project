const express = require('express');
const router = express.Router();

router.get('/', (req,res) => {
  res.render('afterindex', {
    title: 'inputFruits'
  });
});
router.get('/ananas', (req,res) => {
  res.send('hello from ananas');
});
router.get('/apple', (req,res) => {
  res.send('hello from apple');
});

router.get('/ananas/weight', (req,res) => {
  res.send('hello from weight');
});


module.exports = router;
