const express = require("express");
const session = require("express-session");
const passport = require("passport");
const Strategy = require("passport-discord").Strategy;

const app = express();
app.set('view engine', 'ejs');

passport.serializeUser(function(user, done) {
    done(null, user);
});
passport.deserializeUser(function(obj, done) {
    done(null, obj);
})

const scopes = ['identify', 'email', 'guilds', 'guilds.join'];
const prompt = 'consent'

passport.use(new Strategy({
    clientID: '',
    clientSecret: '',
    callbackURL: 'http://localhost:3000/callback',
    scope: scopes,
    prompt: prompt
}, function(accessToken, refreshToken, profile, done) {
    process.nextTick(function() {
        return done(null, profile);
    });
}));

app.use(session({
    secret: 'apollodev5566pass',
    resave: false,
    saveUninitialized: false
}));

app.use(passport.initialize());
app.use(passport.session());

app.get('/login', passport.authenticate('discord', { scope: scopes, prompt: prompt }), function(req, res) {});
app.get('/callback',
    passport.authenticate('discord', { failureRedirect: '/404' }), function(req, res) { res.redirect('/dashboard') } // auth success
);
app.get('/logout', function(req, res) {
    req.logout();
    res.redirect('/');
});
app.get('/api/v1/@me', checkAuth, function(req, res) {
    //console.log(req.user)
    res.json(req.user);
});

app.get('/login', function(req, res) {
    res.redirect('/')
})

function checkAuth(req, res, next) {
    if (req.isAuthenticated()) return next();
    res.send('{"message": "401: Unauthorized client", "code": 401}');
}
