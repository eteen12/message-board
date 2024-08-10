const express = require('express');
const morgan = require('morgan');
const mongoose = require('mongoose');
const messageRoute = require('./routes/messageRoute');

require('dotenv').config();

const app = express();

const dbURI = `mongodb+srv://user:${process.env.DB_PASSWORD}@messages.c2tzc.mongodb.net/test?retryWrites=true&w=majority`;

mongoose.connect(dbURI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    const port = process.env.PORT || 3000;
    app.listen(port, () => {
      console.log(`Server listening on port ${port}`);
    });
  })
  .catch((err) => {
    console.error('Database connection error:', err);
  });

app.set('view engine', 'ejs');

// Middleware
app.use(express.static('public'));
app.use(express.urlencoded({ extended: true }));
app.use(morgan('dev'));

app.use(messageRoute);