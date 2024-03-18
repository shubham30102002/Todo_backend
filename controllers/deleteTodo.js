const Todo = require("../models/Todo");


exports.deleteTodo = async (req, res) => {
    try {
        const {id} = req.params;
        await Todo.findByIdAndDelete(id);

        res.status(200).json(
            {
                success: true,
                message: `Todo ${id} is deleted successfully`
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