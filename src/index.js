
const express = require("express");
const app = express();

app.set('views', __dirname + '/public');
app.set('view engine', 'ejs');

// routes
const home = require('./routes/index');
app.use('/', home);

// middlewares
app.use(function(req, res, next) {
    return res.status(404).render("errors/404");
  });
  

app.listen(3000, function (err) {
    if (err) return console.log(err)
    console.log('200 OK')
})
