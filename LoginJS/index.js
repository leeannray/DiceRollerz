var express = require('express');
var router = express.Router();
var User = require('./User');

//Login Page

router.get('/', function(req, res, next) {
    res.render('index', { title: 'Express'});
});


//authenticate user
router.post('/login', function(req, res) {
    var userName = req.body.UserName;
    var email = req.body. email;

    User.findOne({userName: userName, email: email}, function(err, user) {
        if(err) {
            console.log(err);
            return res.status(500).send();
        }
        if(!User) {
            return res.status(404).send();
        }
        
        return res.status(200).send();
    })

});

//creating User
router.post('/register', function(req, res) {
    var firstName = req.body.firstName;
    var lastName = req.body.lastName;
    var userName = req.body.UserName;
    var email = req.body. email;

    var newUser = new User();
    newUser.firstName = firstName;
    newUser.lastName = lastName;
    newUser.userName = userName;
    newUser.email = email;

    newUser.insert(function(err, savedUser) {
        if(err) {
            console.log(err)
            return res.status(500).send();
        }

        return res.status(200).send();
    })
})

modeule.exports = router;