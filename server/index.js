const express = require('express');
const path = require('path');

// MongoDB
const { MongoClient } = require('mongodb');

const url = "mongodb://localhost:27017/mydb";

const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });

const app = express();
const PORT =  3000;
app.use(express.static(path.join(__dirname, '../templates')));



app.get('/', (req, res) => {
    res.send('Hello World!');
});







app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});