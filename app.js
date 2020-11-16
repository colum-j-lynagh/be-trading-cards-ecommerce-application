const express = require('express');
const mongoose = require('mongoose');
require('dotenv').config();
const morgan = require('morgan');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
//import routes
const userRouters = require('./routes/userRoutes');

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

const PORT = process.env.PORT || 8000;

//middleware
app.use(morgan('dev'));
app.use(bodyParser.json());
app.use(cookieParser());

//routes middleware
app.use('/api', userRouters);

app.listen(PORT, () => {
  console.log(`Listening on Port ${PORT}`);
});
