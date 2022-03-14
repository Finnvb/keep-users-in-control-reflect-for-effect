require("dotenv").config();
const express = require("express");

const vragenRoute = require("./routes/vraag");

module.exports = express()
    .use(express.json())
    .use(express.urlencoded({ extended: true }))

    .use("/vragen", vragenRoute);
