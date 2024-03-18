const Todo = require("../models/Todo");


exports.getTodo = async (req, res) => {
    try {
        //fetch all todo items from database
        const todos = await Todo.find({});
        //response ko update 
        res.status(200).json({
            success: true,
            data: todos,
            message: "Entire Todo Dtat is fetched",
        })
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


exports.getTodoById = async (req, res) => {
    try {
        //extract todo items bases of id
        const id = req.params.id;
        const todo = await Todo.findById({ _id: id });

        //data for given id not found
        if (!todo) {
            return res.status(404).json({
                success: false,
                message: "No data found with given id",
            })
        }

        //data is found
        res.status(200).json({
            success: true,
            data: todo,
            message: `Todo ${id} data successfully fetched`,
        });

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