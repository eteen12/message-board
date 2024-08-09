const express = require('express');
const morgan = require('morgan');
const mongoose = require('mongoose');
const blogRoutes = require('./routes/blogRoutes');

require('dotenv').config();

const app = express();

const dbURI = `mongodb+srv://user:${process.env.DB_PASSWORD}@messages.lborio0.mongodb.net/`;
