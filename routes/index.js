
var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

/* GET User Lists page*/
router.get('/user_lists', function(req, res, text) {
    var db = req.db;
    var col = db.get('usercollection')
    col.find({},{},function(e, docs) {
        res.render('user_lists', { 'user': docs})
    });
});

/* Get New User page. */
router.get('/new_user', function(req, res) {
    res.render('new_user', { title: 'Add New User' });
});

/* POST to Add User Service */
router.post('/adduser', function(req, res) {

    // Set our internal DB variable
    var db = req.db;

    // Get our form values. These rely on the "name" attributes
    var userName = req.body.username;
    var userEmail = req.body.useremail;

    // Set our collection
    var collection = db.get('usercollection');

    // Submit to the DB
    collection.insert({
        "username" : userName,
        "email" : userEmail
    }, function (err, doc) {
        if (err) {
            // If it failed, return error
            res.send("There was a problem adding the information to the database.");
        }
        else {
            // And forward to success page
            res.redirect('user_lists');
        }
    });
});

module.exports = router;
