const express = require("express");
const app = express();
const bodyParser = require("body-parser");
app.use(bodyParser.json())
const path = require("path");


app.set('views', 'src/views');
app.set('view engine', 'ejs');
app.use(express.static(path.join(__dirname, 'public')));
app.use(express.static(path.join(__dirname, 'assets')));

// routes
const home = require('./routes/index');
app.use('/', home);

// middlewares
app.use(function(req, res, next) {
    return res.status(404).render("errors/404");
  });
  
app.listen(4000, function (err) {
    if (err) return console.log(err)
    console.log('Online!')
})
