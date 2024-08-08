const express = require('express');

const app = express();

const bodyParser = require('body-parser');
app.use(express.json());

app.use(bodyParser.urlencoded({ extended: false }));

const books = [
    {
        id: 1,
        title: 'Book 1',
        price: 2500
    },

    {
        id: 2,
        title: 'Book 2',
        price: 5400
    },

    {
        id: 3,
        title: 'Book 3',
        price: 1200
    },

    {
        id: 4,
        title: 'Book 4',
        price: 3000
    }
]

app.get('/books', (req, res) => {
    res.send(books);
});

app.get('/books/:id', (req, res) => {
    const idToGet = books.findIndex((book) => {
        if (book.id == req.params.id) {
            return true;
        }
    });
    res.send(books[idToGet]);
});

app.post('/books', (req, res) => {
    books.push(req.body);
    res.send(books);
});

app.delete('/books/:id', (req, res) => {
    const idToDelete = books.findIndex((book) => {
        if (book.id == req.params.id) {
            return true;
        }
    });
    books.splice(idToDelete, 1);
});

app.patch('/books/:id', (req, res) => {
    const idToUpdate = books.findIndex((book) => {
        if (book.id == req.params.id) {
            return true;
        }
    });
    books[idToUpdate] = req.body;
    res.send(books);
});

app.put('/books/:id', (req, res) => {
    const idToUpdate = books.findIndex((book) => {
        if (book.id == req.params.id) {
            return true;
        }
    });
    books[idToUpdate] = req.body;
    res.send(books);
});

app.listen(3456, () => {
    console.log('Server is running on port 3456');
});
