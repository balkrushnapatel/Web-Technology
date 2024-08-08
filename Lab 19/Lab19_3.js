const express = require('express');
const app = express();
const fs = require('fs');

app.get('/demo', (req,res) => {
    fs.readFile('./demo.txt', (err, data) => {
        res.end(data.toString());
    })
});


app.listen(8000,function (){
    console.log("Server running at port 8000")
});