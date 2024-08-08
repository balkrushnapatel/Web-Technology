const express = require('express');

const app = express();

const bodyParser = require('body-parser');
app.use(express.json());

app.use(bodyParser.urlencoded({ extended: false }));

const faculties = [
    {
        id: 1,
        name: 'arjun bala',
        age: 20,
        salary: 20000
    },

    {
        id: 2,
        name: 'darshan piapliya',
        age: 25,
        salary: 25000
    },

    {
        id: 3,
        name: 'rahul patel',
        age: 22,
        salary: 22000
    },

    {
        id: 4,
        name: 'rinku kumar',
        age: 32,
        salary: 28000

    }
]

app.get('/faculties', (req, res) => {
    res.send(faculties);
});

app.get('/faculties/:id', (req, res) => {
    const idToGet = faculty.findIndex((faculty) => {
        if (faculty.id == req.params.id) {
            return true;
        }
    });
    res.send(faculties[idToGet]);
});

app.post('/faculties', (req, res) => {
    faculties.push(req.body);
    res.send(faculties);
});

app.delete('/faculties/:id', (req, res) => {
    const idToDelete = faculties.findIndex((faculty) => {
        if (faculty.id == req.params.id) {
            return true;
        }
    });
    faculties.splice(idToDelete, 1);
});

app.patch('/faculties/:id', (req, res) => {
    const idToUpdate = faculties.findIndex((faculty) => {
        if (faculty.id == req.params.id) {
            return true;
        }
    });
    faculties[idToUpdate] = req.body;
    res.send(faculties);
});

app.put('/faculties/:id', (req, res) => {
    const idToUpdate = faculties.findIndex((faculty) => {
        if (faculty.id == req.params.id) {
            return true;
        }
    });
    faculties[idToUpdate] = req.body;
    res.send(faculties);
});

app.listen(4567, () => {
    console.log('Server is running on port 4567');
});
