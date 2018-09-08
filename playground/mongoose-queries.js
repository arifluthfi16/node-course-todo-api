const {ObjectID} = require('mongodb');
const {mongoose} = require('./../server/db/mongoose');
const {Todo} = require('./../server/models/todo');
const {User} = require('./../server/models/user');

// var id = '5b92a57df1ac5d08583f4e47';

// if(!ObjectID.isValid(id)){
//     console.log("Id not valid");
// }else{

// // Todo.find({
// //     _id : id
// // }).then((todos)=>{
// //     console.log(todos);
// // });

// // Todo.findOne({
// //     _id: id
// // }).then((todo)=>{
// //     console.log(todo);
// // });

// Todo.findById(id).then((todo)=>{
//     if(!todo){
//         return console.log("Id Not Found");
//     }
//     console.log(todo);
// }).catch((e)=>{
//     return console.log(e);
// });
// }

var userId = '5b93e684e1f3e47554f3734d';

User.findById(userId).then((todo)=>{
    if(!todo){
        return console.log("User not found");
    }
    console.log(todo);
}).catch((e)=>{
    return console.log(e);
})