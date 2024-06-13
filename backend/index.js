
//Write basic express boilerplate code,
//write express.json() middleware
const express = require('express');
const app = express();
const cors = require("cors");
const port = 3000;

const {createTodo ,updateTodo}  = require('./types.js');
const { todo } = require('./db');



app.use(express.json());
app.use(cors());

app.post('/todo', async function(req, res){
    const createPayload = req.body;
    const parsedPayload = createTodo.safeParse(createPayload);
    // console.log(parsedPayload);
    
    if(!parsedPayload.success){
        res.status(411).json({
            msg : "You send the wrong inputs"
        })
        return; 
    }
    
    //put in mongodb
   await todo.create({
        title : createPayload.title,
        description : createPayload.description,
        completed : false,
    })

    res.json({
        msg : "Todo created"
    })
});

app.get('/',function(req, res){
    res.json({
        msg : "Hello World"
    })
})

app.get('/todos', async function(req, res) {
    const todos = await todo.find({});
    console.log(todos) //promise
    res.json({
        todos
    })
});

app.put('/completed',async function(req, res){
    const updatePayload = req.body;
    const parsedPayload = updateTodo.safeParse(updatePayload);
    
    
    if(!parsedPayload.success){
        res.status(411).json({
            msg : "You send the wrong inputs"
        })
        return; 
    } 
    
    await todo.update({
     _id : req.body.id
    },{
        completed : true
    })
    res.json({
        msg : "Todo marks as completed"
    })
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
