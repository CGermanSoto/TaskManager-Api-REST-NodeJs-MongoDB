const express = require('express');
const app = express();
const tasks = require('./routes/tasks');
const connectDB = require('./db/connect');
require('dotenv').config();

//middlewares
app.use(express.static('./public'));
app.use(express.json());

// Lastname url
app.use('/api/v1/tasks', tasks);


const port = 3000;

const start = async() =>{
    try {
        await connectDB(process.env.MONGO_URI)
        app.listen(port);
        console.log('Connected to DB & Server')
    } catch (error) {
        console.log(error);
    }
}

start();


