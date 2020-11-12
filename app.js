const express = require('express');
const mongoose = require('mongoose');
require('dotenv').config();

//app
const app = express();

//database

mongoose
  .connect(process.env.DATABASE, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log('DB Connected');
  });

app.get('/', (req, res) => {
  res.send('Hello World');
});

const PORT = process.env.PORT || 8000;

app.listen(PORT, () => {
  console.log(`Listening on Port ${PORT}`);
});
