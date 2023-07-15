
const express = require('express');
const bodyParser = require('body-parser');
const app = express();
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.json());


const mongoose = require('mongoose');
const mongoDB = "mongodb://127.0.0.1:27017/db";

mongoose.set("strictQuery",false);


mongoose.connect(mongoDB, {
},).then(() => console.log('connected'))
    .catch((err) => { console.log(err); });

