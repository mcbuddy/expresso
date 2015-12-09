
var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

/* GET expresso page*/
router.get('/expresso', function(req, res, text) {
    res.render('expresso', { title: 'Expresso Page'})
});


module.exports = router;
