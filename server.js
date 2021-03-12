const express = require('express');
const app = express();

// routes
app.get('/', function(req, res) {
    res.sendFile(__dirname + '/src/public/index.html')
});

app.listen(3000)
