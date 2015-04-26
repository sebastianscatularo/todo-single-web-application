var express         = require('express');
var passport        = require('passport');
var LocalStrategy   = require('passport-local').Strategy;
var router          = express.Router();

var user = {
    username: "test",
    password: "test"
}

passport.serializeUser(function(user, done){
    done(null, new Buffer(user.username).toString('base64'));
});

passport.deserializeUser(function(_user, done) {
    if (new Buffer(_user, 'base64').toString('ascii') === user.username) {
        done(null, user);    
    } else {
        done(null, false);
    }
    
});

passport.use('local',
    new LocalStrategy(
        function(username, password, done) {
            if (user.username === username) {
                return done(null, user);
            } else {
                return done(null, false, 'Incorrect username or password');
            }
        }
    )
);

router.get('/login', 
    function(req, res) {
        res.render('login', { user : req.user });
    }
);

router.post('/login', 
    passport.authenticate('local',
        {
            successRedirect : '/', // redirect to the secure profile section
            failureRedirect : '/login'//, // redirect back to the signup page if there is an error
            //failureFlash : true // allow flash messages
        }
    )
);

router.get('/logout', 
    function(req, res) {
        req.logout();
        res.redirect('/');
    }
);


module.exports = router;
