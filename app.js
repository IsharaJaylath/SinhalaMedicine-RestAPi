const express = require('express');
const app=express();
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
require('dotenv/config');

//middle
app.use(bodyParser.json());
const postRoute = require('./routes/posts');

app.use('/posts',postRoute);
//Routes
app.get('/',(req,res) =>{
   res.send('We are on Home');
});




 //connect Db
 mongoose.connect(
     process.env.DB_CONNECTION,
     {useNewUrlParser:true},
     () =>
    console.log('Database connect Succesfully')
 );

//how to we start listnig to the server
app.listen(3000);
