const express = require("express");
const cookieParser = require("cookie-parser");
const dotenv = require("dotenv");
const path = require("path");

const app = express();
const port = process.env.PORT;

app.set("view engine", "ejs");
