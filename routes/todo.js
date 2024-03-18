const express = require("express");
const router = express.Router();

//import Controllers
const {createTodo} = require("../controllers/createTodo");


//define API routes
router.post("/createTodo" , createTodo);


module.exports = router;