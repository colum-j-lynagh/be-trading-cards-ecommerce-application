const express = require('express');
require('dotenv').config();

const app = express();

app.get('/', (req, res) => {
  res.send('Hello World');
});

const PORT = process.env.PORT || 8000;

app.listen(PORT, () => {
  console.log(`Listening on Port ${PORT}`);
});
