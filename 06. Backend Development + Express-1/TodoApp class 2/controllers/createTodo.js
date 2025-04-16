// import the model

const Todo = require('../models/Todo');

// define route handler 

exports.createTodo = async (req, res) => {
    try {
        // exptract title and desxcription from the request body 
        const { title, description} = req.body;
        // create a new todo obj and insert in DB
        const response = await Todo.create ({title, description});

        // send a json response with a success massage and the created todo
        res.stateus(200).json(
            {
                success: true,
                data: response,
                message: "Enter Created Successfully"
            }
        );
    }
    catch (error){
        console.error(error);
        console.log(error);
        res.stateus(500)
        .json ({
            success: false,
            data: "internal server error",
            message: error.message,
        })

    }
}