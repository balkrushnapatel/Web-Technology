const express = require('express');

const app = express();

const bodyParser = require('body-parser');
app.use(express.json());

app.use(bodyParser.urlencoded({ extended: false }));

const students = [
    {
        id: 1,
        name: 'John Doe',
        age: 20
    },

    {
        id: 2,
        name: 'Jane Wick',
        age: 25
    },

    {
        id: 3,
        name: 'Bob Smith',
        age: 30
    },

    {
        id: 4,
        name: 'Alice Johnson',
        age: 24
    }
]

app.get('/students', (req, res) => {
    res.send(students);
});

app.get('/students/:id', (req, res) => {
    const idToGet = students.findIndex((student) => {
        if (student.id == req.params.id) {
            return true;
        }
    });
    res.send(students[idToGet]);
});

app.post('/students', (req, res) => {
    students.push(req.body);
    res.send(students);
});

app.delete('/students/:id', (req, res) => {
    const idToDelete = students.findIndex((student) => {
        if (student.id == req.params.id) {
            return true;
        }
    });
    students.splice(idToDelete, 1);
});

app.patch('/students/:id', (req, res) => {
    const idToUpdate = students.findIndex((student) => {
        if (student.id == req.params.id) {
            return true;
        }
    });
    students[idToUpdate] = req.body;
    res.send(students);
});

app.put('/students/:id', (req, res) => {
    const idToUpdate = students.findIndex((student) => {
        if (student.id == req.params.id) {
            return true;
        }
    });
    students[idToUpdate] = req.body;
    res.send(students);
});

app.listen(3456, () => {
    console.log('Server is running on port 3456');
});
