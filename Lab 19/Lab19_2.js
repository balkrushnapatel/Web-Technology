const express = require('express');
const app = express();

app.get('/', function(req,res) {
    res.send('Hello World!');
});

app.get('/about', function(req,res) {
    res.send('My self Balkrushna Patel');
});

app.get('/contact', function(req,res) {
    res.send('You can Contact me at DU Boys Hostel.......');
});

app.get('/me', function(req,res) {
    res.send('I am a Web Developer At DU.......');
});

app.get('/fact', function(req,res) {
    res.send('Noobest Player Of World Harshil Yadav........');
});


app.listen(8000,function (){
    console.log("Server running at port 8000")
});