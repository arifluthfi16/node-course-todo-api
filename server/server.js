const express = require('express');
const bodyParser = require('body-parser');

var {mongoose} = require('./db/mongoose.js'); //Connect & Configure DB
var {Todo} = require('./models/todo.js'); //Grab Todo Model
var {User} = require('./models/user.js'); //Grab User Model

var app = express();

app.use(bodyParser.json());

//Bakal Ngelakuin sesuatu buat post request
app.post("/todos", (req,res)=>{

    var todo = new Todo({
        text: req.body.text
    })

    console.log(todo.text);

    todo.save().then((doc)=>{
        res.send(doc);
    },(e)=>{
        res.status(400).send(e);
    });
})

//Bakal Ngelakuin sesuatu buat get request  
app.get("/todos", (req,res)=>{
    Todo.find().then((todos)=>{
        res.send({
            todos
        })
    },(e)=>{
        res.status(400).send(e);
    })
});

app.listen(3000, ()=>{
    console.log("Started on port 3000");
});

module.exports = {
    app
}