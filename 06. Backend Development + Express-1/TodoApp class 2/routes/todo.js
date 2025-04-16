const express = require('express');
const router = express.Router();

// import the controller
const { createTodo} = require('../contollers/createTodo');

// define API routes
router.post("/create", createTodo);

module.exports = router;
