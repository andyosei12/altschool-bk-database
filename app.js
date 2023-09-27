const express = require('express');
const morgan = require('morgan');
const sequelize = require('./config/sequelize');
const userRouter = require('./routes/user');

const app = express();
const port = 3000;

app.use(morgan('dev'));
app.use(express.json());

sequelize
  .authenticate()
  .then(() => {
    console.log('connection to db successful');
  })
  .catch((err) => {
    console.log('error connecting to db', err);
  });

app.get('/', (req, res) => {
  res.json('hello there');
});

app.use('/user', userRouter);

app.listen(port, () => {
  console.log(`server running on port ${port}`);
});
