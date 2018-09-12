const express = require('express');
const bodyParser = require('body-parser');
const {ObjectID} = require('mongodb');

var {mongoose} = require('./db/mongoose.js'); //Connect & Configure DB
var {Todo} = require('./models/todo.js'); //Grab Todo Model
var {User} = require('./models/user.js'); //Grab User Model

var app = express();
const port = process.env.PORT || 3000;


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

app.get("/todos/:id",(req,res)=>{
    var id = req.params.id;

    if(!ObjectID.isValid(id)){
        return res.status(404).send({});
    }else{
        Todo.findById(id).then((todo)=>{
            if(!todo){
                return res.status(404).send({});
            }else{
                return res.status(200).send({todo});
   
            }
        }).catch((e)=>{
                return res.status(404).send({});
        })
    }
})

app.get("/", (req,res)=>{
    res.send("This is homepage");
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

app.listen(port, ()=>{
    console.log("Started on port ",port);
});

module.exports = {
    app
}