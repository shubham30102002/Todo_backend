//import the models
const Todo = require("../models/Todo");

//define routes handler
exports.createTodo = async (req, res) => {
    try {
        //extract title and description from req body
        const { title, description } = req.body;

        //create a new Todo object and insert in db
        const response = await Todo.create({ title, description });

        //send a json response with a success flag
        res.status(200).json(
            {
                success: true,
                data: response,
                message: "Entry created successfully"
            }
        );
    } catch (error) {
        console.log("Error aa gaya bhai sahab");
        console.error(error);
        res.status(500).json(
            {
                success: false,
                data: "Internal server error",
                message: error.message,
            }
        );
    }
}