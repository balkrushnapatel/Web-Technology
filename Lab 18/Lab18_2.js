const http = require('http');

const server1 = http.createServer((req,res)=>{
    res.end('About:- My Self Balkrushna Patel.....\n');
});

server1.listen(3000, ()=>{
    console.log('Server Running At Port 3000.......');
})

const server2 = http.createServer((req,res)=>{
    res.end('Contact :-  Meet Me At DU Hostel......\n');
});

server2.listen(3010, ()=>{
    console.log('Server Running At Port 3010.......');
})


const server3 = http.createServer((req,res)=>{
    res.end('Stream :- I Study in B.Tech CSE In DU.......\n');
});

server3.listen(3020, ()=>{
    console.log('Server Running At Port 3020.......');
})


const server4 = http.createServer((req,res)=>{
    res.end('Crime Partners :- My Crime Partners Are Sahil And Mitesh.....\n');
});

server4.listen(3030, ()=>{
    console.log('Server Running At Port 3030.......');
})


const server5 = http.createServer((req,res)=>{
    res.end('Location :- Please Refer In Google Maps .....');
});

server5.listen(3040, ()=>{
    console.log('Server Running At Port 3040.......');
})
