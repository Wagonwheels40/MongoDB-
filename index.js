const express = require('express');
const bodyParser = require('body-parser');
const MongoClient = require('mongodb').MongoClient;

const app = express();
const port = process.env.PORT || 3000;

app.use(bodyParser.urlencoded({ extended: true }));

MongoClient.connect('mongodb://localhost:27017', (err, client) => {
    if (err) return console.error(err);
    console.log('Connected to MongoDB');

    const db = client.db('mydatabase');

    // Add your database queries here

    app.listen(port, () => {
        console.log(`Server running on port ${port}`);
    });
});