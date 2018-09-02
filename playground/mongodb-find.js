const {MongoClient, ObjectID} = require('mongodb');

var obj = new ObjectID();
console.log(obj);

MongoClient.connect("mongodb://localhost:27017/TodoApp",(err, db) => {
    if(err){
       return  console.log("Unable To Connect");
    }
    console.log("Connected to MongoDB server");

    // db.collection("Users").find({
    //     name : "Arip"
    // }).toArray().then((docs)=>{
    //     console.log("Todos");
    //     console.log(JSON.stringify(docs,undefined,2));
    // },(err)=>{
    //     console.log("Unable to fetch todos ",err);
    // })

    // db.collection("Todos").find().count().then((count)=>{
    //     console.log(`Todos Count : ${count}`);
    // },(err)=>{
    //     console.log("Unable to fetch todos ",err);
    // })

    db.collection("Users").find({
        name: "Arip"
    }).toArray().then((docs)=>{
        console.log(JSON.stringify(docs,undefined,2));
    },(err)=>{
        console.log("Error Occurs");
    });


    //db.close(); //Close Connection to MongoDB
}); //Connect ke local
