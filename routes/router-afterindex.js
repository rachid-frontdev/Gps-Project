const express = require('express');
const router = express.Router();

router.get('/', (req,res) => {
  res.render('afterindex', {
    title: 'inputFruits'
  });
});

module.exports = router;
