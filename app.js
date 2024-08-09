const express = require('express');
const morgan = require('morgan');
const mongoose = require('mongoose');

require('dotenv').config();

const app = express();

const dbURI = `mongodb+srv://user:${process.env.DB_PASSWORD}@messages.lborio0.mongodb.net/`;

mongoose.connect(dbURI)
.then(()=>{
    const port = 3000;

    app.listen(port);

    console.log(`listening on port ${port}`);
});