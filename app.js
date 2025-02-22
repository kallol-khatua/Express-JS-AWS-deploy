const express = require("express");
const path = require("path");
require("dotenv").config();
const app = express();
const ejsMate = require("ejs-mate");
const bodyParser = require('body-parser');

const port = process.env.PORT || 3000;

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "/views"));

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.engine("ejs", ejsMate);
app.use(express.static(path.join(__dirname, "/public")));

app.get("/", async (req, res) => {
    const userName = "Kallol Khatua"
    res.render("./home.ejs", { name: userName })
})

app.get("/about", async (req, res) => {
    res.render("./about.ejs", { name: "kallol" })
})

app.get("/hello-world", async (req, res) => {
    const response = {
        statsCode: 200,
        message: "Hello world",
        success: true,
        port: port,
        // env: process.env.DATA,
        method: req.method,
        path: req.path,
        update: "Auto github deploy"
    };
    res.status(200).send(response)
})

app.listen(port, () => {
    console.log(`Listening on port ${port}`);
})