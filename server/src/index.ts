import express from 'express';
import sqlite3 from 'sqlite3';

const app = express();
const port = 3000;

const db = new sqlite3.Database('./db/database.sqlite', (err) => {
    if (err) {
        console.error('Error opening database:', err.message);
    } else {
        console.log('Connected to SQLite database.');
    }
});

app.get('/', (req, res) => {
    res.send('Hello from Express!');
});

app.listen(port, () => {
    console.log(`Server is running at http://localhost:${port}`);
});
