const express = require('express');
const bodyParser = require('body-parser');
const emailRout = require('./src/route/email-rout');
const userRout = require('./src/route/user-rout');

const app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use('/email', emailRout);
app.use('/user', userRout);

app.listen(3000);