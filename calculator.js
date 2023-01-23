/** @format */

const express = require("express");
const bodyParser = require("body-parser");
const port = 3000;

const app = express();
// for using bodyparseeer in express
app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", (req, res) => res.sendFile(__dirname + "/index.html"));

app.post("/", (req, res) => {
    // console.log(req.body);
    const num1 = +req.body.num1;
    const num2 = +req.body.num2;
    const result = num1 + num2;
    res.send("the sesult is " + result);
});

app.listen(port, () => console.log(`Example app listening on port ${port}!`));
