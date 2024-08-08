const http = require('http');
const fs = require('fs');

const server = http.createServer((req, res) => {
    (fs.readFile('abc.txt', (err, data) => {
        res.end(data.toString());
    }));

    fs.appendFile('demo.txt', 'Welcome Home', (err) => {
        console.log('Append successfull.....');
    });

    (fs.readFile('demo.txt', (err, data) => {
        res.end(data.toString());
    }));
});

server.listen(3000, () => {
    console.log('Server Running At Port 3000.......');
})