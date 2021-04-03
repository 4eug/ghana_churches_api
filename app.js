const express = require('express');
const app = express();
const mongoose = require('mongoose');
require('dotenv/config');

app.use(express.json());

// IMPORT ROUTES

const postsRoute = require('./routes/posts');
const indexRoute = require('./routes/index');

app.use('/posts', postsRoute);

// ROUTES
app.get('/',indexRoute );

// mongodb+srv://Eugene:<password>@cluster0.6tiab.mongodb.net/myFirstDatabase?retryWrites=true&w=majority
// CONNECT TO DATABASE'
mongoose.connect(
    process.env.DB_CONNECTION,
 {useUnifiedTopology: true, useNewUrlParser: true, useCreateIndex: true },
  () =>   
    console.log('connected to MongoDB!')
);


// LISTENING TO SERVER
app.listen(process.env.PORT || 3000);

