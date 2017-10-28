var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('about', { 
    title: '首页', 
    name: '我是mark' });
});

module.exports = router;
