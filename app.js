const express = require('express');
const morgan = require('morgan');
const mongoose = require('mongoose');
const messageRoute = require('./routes/messageRoute');

require('dotenv').config();

const app = express();

const dbURI = `mongodb+srv://user:${process.env.DB_PASSWORD}@messages.lborio0.mongodb.net/`;

mongoose.connect(dbURI)
.then(()=>{
    const port = 3000;
    app.listen(port);
    console.log(`listening on port ${port}`);
})
.catch((err)=>{
    console.log('error');
})

app.set('view engine', 'ejs');

//middlewear
app.use(express.static('public'));
app.use(express.urlencoded({extended: true}));
app.use(morgan('dev'));

app.use('/', messageRoute);