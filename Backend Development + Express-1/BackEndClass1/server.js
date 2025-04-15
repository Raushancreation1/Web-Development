

//Server Installation
const express = require('express');
const app = express();

//activate the server on 3000 port
app.listen(8000, () => {
    console.log("server started on port 8000");
});


//used to parese req.body in express -> PUT,or POST
const bodyParser = require('body-parser');



//specifically paress JSON data & add it to the request body
app.use(bodyParser.json());


//create a route
app.get('/', (request, response) => {
    response.send('Hello World');
})

app.get('/api/car', (request, response) => {
    const {name,brand} = request.body;
    console.log(name);
    console.log(brand);
    response.send("Car Submitted Successfully");
})

const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/myDatabase', {
    useNewUrlParser: true,
    useUnifiedTopology: true
})

.then(() => {
    console.log("connection Successful")
})

.catch((error) => {
    console.log("Received Error:")
});