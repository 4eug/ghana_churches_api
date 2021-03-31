const express = require('express');
const app = express();
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
require('dotenv/config');

app.use(bodyParser.json());

// IMPORT ROUTES

const postsRoute = require('./routes/posts');

app.use('/posts', postsRoute);

// ROUTES
app.get('/', (req, res) => {
    res.send('Lets Start');
});

// mongodb+srv://Eugene:<password>@cluster0.6tiab.mongodb.net/myFirstDatabase?retryWrites=true&w=majority
// CONNECT TO DATABASE'
mongoose.connect(
    process.env.DB_CONNECTION,
 {useUnifiedTopology: true, useNewUrlParser: true, useCreateIndex: true },
  () =>   
    console.log('connected to MongoDB!')
);


// LISTENING TO SERVER
app.listen(3000);

