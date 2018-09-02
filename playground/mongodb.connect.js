// const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');

var obj = new ObjectID();
console.log(obj);

MongoClient.connect("mongodb://localhost:27017/TodoApp",(err, db) => {
    if(err){
       return  console.log("Unable To Connect");
    }
    console.log("Connected to MongoDB server");

    // db.collection('Todos').insertOne({
    //     text: 'Something to do',
    //     completed: false
    // },(err,result)=>{
    //     if(err){
    //         return console.log("Unable to insert todo", err);
    //     }
    //     console.log(JSON.stringify(result.ops, undefined, 2))
    // })//Inserting New Records

    // db.collection('Users').insertOne({
    //     name: 'Arip',
    //     age : 18,
    //     location : 'Dimana we'
    // },(err,result)=>{
    //     if(err){
    //         return console.log("Unable to insert todo", err);
    //     }
    //     console.log(JSON.stringify(result.ops[0]._id.getTimestamp()))
    // })//Inserting New Records

    db.close(); //Close Connection to MongoDB
}); //Connect ke local
