const express = require("express");
const app = express();

// load config from env file

require("dotenv").config();
const PORT = process.env.PORT || 4000;

// middleware to pares json request body
app.use(express.json());

// mount the todo routes 
app.use("/api/todo", todoroutes);