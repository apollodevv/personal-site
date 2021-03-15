const express = require("express")

const app = express();
app.set('view engine', 'ejs');

app.listen(3000, function (err) {
    if (err) return console.log(err)
    console.log('200 OK')
})
