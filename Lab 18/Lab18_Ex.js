const http = require('http');
const fs = require('fs');

const server = http.createServer((req, res) => {

    // res.setHeader('Contact-Type', 'text/html')
    if (req.url === '/home') {
        res.statusCode = 200;
        data = fs.readFileSync('Lab18_Ex.html');
        res.end(data.toString());
    }
    else if (req.url === '/about') {
        res.end('Welcome to our about page');
    }

    else if (req.url === '/Lab172') {
        data = fs.readFile('../Lab 17/Lab17_2.js', (err, data) => {

            res.end(data);
        })
    }

    else if (req.url === '/Lab173') {
        data = fs.readFile('../Lab 17/Lab17_3.js', (err, data) => {

            res.end(data);
        })
    }

    else if (req.url === '/Lab23') {
        data = fs.readFile('../Lab 17/Lab17_3.js', (err, data) => {
            res.end(data);
        });
    }
}
);
// res.end('Opps! page not found');
server.listen(9999, () => {
    console.log('Listening to the port 9999');
});