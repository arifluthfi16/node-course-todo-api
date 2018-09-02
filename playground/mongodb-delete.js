const {MongoClient, ObjectID} = require('mongodb');

var obj = new ObjectID();
console.log(obj);

MongoClient.connect("mongodb://localhost:27017/TodoApp",(err, db) => {
    if(err){
       return  console.log("Unable To Connect");
    }
    console.log("Connected to MongoDB server");

    //Delete Many
    // db.collection('Todos').deleteMany({text : "Eat lunch"}).then((result)=>{
    //     console.log("Deletion Success ",result);
    // },(err)=>{
    //     console.log("Unable to Delete");
    // })

    //Delete one
    // db.collection("Todos").deleteOne({text: "Eat lunch"}).then((res)=>{
    //     console.log(res);
    // })

    //findOneAndDelete
    // db.collection("Todos").findOneAndDelete({completed : false}).then((res)=>{
    //     console.log(res);
    // })

    db.collection("Users").deleteMany({name : "Arip"}).then((res)=>{
        console.log("Success ", res);
    })

    obh = new ObjectID("5b87d9ece7610136143a7412")

    db.collection("Users").findOneAndDelete({_id : obh}).then((res)=>{
        console.log("Success", res);
    })

    //db.close(); //Close Connection to MongoDB
}); //Connect ke local
