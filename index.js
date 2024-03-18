const express = require("express")
const app = express();

//laod config from env file
require("dotenv").config();
const PORT = process.env.PORT || 4000;

//middleware to parse json request body
app.use(express.json());


//import routes for todo api
const todoRoutes = require("./routes/todo");

//mount the todo with api routes
app.use("/api/v1" , todoRoutes);

//start server
app.listen(PORT, () =>{ 
    console.log(`Server started successfully at ${PORT}`)
})


//connection to the database
const dbConnect = require("./config/database");
dbConnect();


//default routes
app.get("/" , (req,res) => {
    res.send("<h1> Thala for a reason </h1>")
})
