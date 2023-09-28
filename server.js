const express = require('express');
const db = require('./db');
const UserRouter = require('./routes/user');

const app = express();
const port = 5000;

db.connect();
app.use(express.json());

app.use('/user', UserRouter);

app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});
