"use strict";

const express = require("express");
var exphbs  = require('express-handlebars');

let app = express();
app.use(express.static('dist'));
app.engine('handlebars', exphbs({defaultLayout: 'main'}));
app.set('view engine', 'handlebars');

let endTime = '2017-02-04T19:30:00+0000';

app.get("/update-end/:year/:month/:day/:hour/:min", (req, res) => {
  const { year, month, day, hour, min} = req.params;
  endTime = `${year}-${month}-${day}T${hour}:${min}:00+0000`;
  res.send(`End time succesfully changed to ${endTime}`);
});

app.get('/', function (req, res) {
  res.render("index", {
    endTime: endTime
  })
});

app.listen(process.env.PORT || 8080);

