"use strict";

const express = require("express");
var exphbs  = require('express-handlebars');

let app = express();
app.use(express.static('public'));
app.engine('handlebars', exphbs({defaultLayout: 'main'}));
app.set('view engine', 'handlebars');

app.get('/', function (req, res) {
  res.render("index")
});

app.listen(process.env.PORT || 8080);

