
var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

/* GET expresso page*/
router.get('/user_lists', function(req, res, text) {
    var db = req.db;
    var col = db.get('usercollection')
    col.find({},{},function(e, docs) {
        res.render('user_lists', { 'user': docs})
    });

});




module.exports = router;
