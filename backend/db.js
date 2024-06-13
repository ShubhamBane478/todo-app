

const mongoose = require('mongoose');

mongoose.connect('mongodb+srv://ShubhamBane:F6oYXNGYyEU6ewnI@cluster0.4dzwgvj.mongodb.net/todos');

const todoSchema = mongoose.Schema({
    title: String,
    description : String,
    completed: { type: Boolean, default: false }
})

const todo  = mongoose.model('todo', todoSchema);

module.exports = {
    todo
}