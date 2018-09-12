const mongoose = require('mongoose');

mongoose.Promise = global.Promise;
mongoose.connect("mongodb://heroku-todo-api:@a08211533208@ds149672.mlab.com:49672/todo-apis" || "mongodb://localhost:27017/TodoApp");

module.exports = {
    mongoose
}