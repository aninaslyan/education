const express = require("express");
const bodyParser = require("body-parser");
const emailRouter = require("./src/route/email-rout");

const app = express();
app.use(bodyParser.json());

app.use("/email", emailRouter);

app.listen(8080, function () {
    console.log("Example app listening on port 8080!")
});
