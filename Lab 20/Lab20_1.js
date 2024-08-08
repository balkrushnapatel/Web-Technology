const express = require('express');
const fs = require('fs');
const app = express();

app.use((req,res,next) =>{
    console.log('middleware ran');
    next();
});

app.get('/', function(req,res) {
    res.send('Hello World!');
});


app.listen(8080,function (){
    console.log("Server running at port 8000")
});