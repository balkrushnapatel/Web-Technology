const http = require('http');

const server = http.createServer((req,res)=>{
    res.end('Hello World From My First Web Server...... And From My PC');
});

server.listen(3000, ()=>{
    console.log('Server Running At Port 3000.......');
})