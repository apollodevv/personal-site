const express = require("express")

const app = express();
app.set('view engine', 'ejs');


app.get('/', function(req, res) {
  res.sendFile(__dirname + '/src/public/index.ejs');
});

app.get('/api', function(req, res) {
  res.sendFile(__dirname + '/src/utils/api/index.ejs');
});

app.listen(3000, function (err) {
    if (err) return console.log(err)
    console.log('200 OK')
})
