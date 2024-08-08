const express = require('express');

const app = express();

const bodyParser = require('body-parser');
app.use(express.json());

app.use(bodyParser.urlencoded({ extended: false }));

const laptops = [
    {
        id: 1,
        name: 'HP Victus',
        price: 50000
    },

    {
        id: 2,
        name: 'HP Pavillion',
        price: 36500
    },

    {
        id: 3,
        name: 'Lenovo ThinkPad',
        price: 45000
    },

    {
        id: 4,
        name: 'Dell Inspiron',
        price: 54200
    }
]

app.get('/laptops', (req, res) => {
    res.send(laptops);
});

app.get('/laptops/:id', (req, res) => {
    const idToGet = laptops.findIndex((laptop) => {
        if (laptop.id == req.params.id) {
            return true;
        }
    });
    res.send(laptops[idToGet]);
});

app.post('/laptops', (req, res) => {
    laptops.push(req.body);
    res.send(laptops);
});

app.delete('/laptops/:id', (req, res) => {
    const idToDelete = laptops.findIndex((laptop) => {
        if (laptop.id == req.params.id) {
            return true;
        }
    });
    laptops.splice(idToDelete, 1);
});

app.patch('/laptops/:id', (req, res) => {
    const idToUpdate = laptops.findIndex((laptop) => {
        if (laptop.id == req.params.id) {
            return true;
        }
    });
    laptops[idToUpdate] = req.body;
    res.send(laptops);
});

app.put('/laptops/:id', (req, res) => {
    const idToUpdate = laptops.findIndex((laptop) => {
        if (laptop.id == req.params.id) {
            return true;
        }
    });
    laptops[idToUpdate] = req.body;
    res.send(laptops);
});

app.listen(5461, () => {
    console.log('Server is running on port 5461');
});
