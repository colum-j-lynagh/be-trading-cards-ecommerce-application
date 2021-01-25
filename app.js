const express = require('express');
const mongoose = require('mongoose');
require('dotenv').config();
const morgan = require('morgan');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const expressValidator = require('express-validator');
//import routes
const authRoutes = require('./routes/authRoutes');
const userRoutes = require('./routes/userRoutes');
const brandRoutes = require('./routes/brandRoutes');

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
app.use(expressValidator());

//routes middleware
app.use('/api', authRoutes);
app.use('/api', userRoutes);
app.use('/api', brandRoutes);

app.listen(PORT, () => {
  console.log(`Listening on Port ${PORT}`);
});
