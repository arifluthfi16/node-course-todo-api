const {MongoClient, ObjectID} = require('mongodb');

var obj = new ObjectID();
console.log(obj);

MongoClient.connect("mongodb://localhost:27017/TodoApp",(err, db) => {
    if(err){
       return  console.log("Unable To Connect");
    }
    console.log("Connected to MongoDB server");

    db.collection('Users').findOneAndUpdate(
        {_id : new ObjectID("5b86c203b5a68c32500140c5")},
        {
            $set : {
                name : "Usap",
                require: true
            },
            $inc : {
                age: +1
            }
        },{
            returnOrginial : false
        }
    ).then((res)=>{
        console.log(res);
    })

    //db.close(); //Close Connection to MongoDB
}); //Connect ke local
