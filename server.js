const express = require('express');
const db = require('./db');

const app = express();
const port = 5000;

db.connect();
app.use(express.json());

app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});
