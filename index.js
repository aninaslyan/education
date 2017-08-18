const express = require('express');
const bodyParser = require('body-parser');
const emailRout = require('./src/route/email-rout');

const app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use('/', emailRout);
app.listen(3000);