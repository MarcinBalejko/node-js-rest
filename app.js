const express = require('express');
const app = express();
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');
require('dotenv/config');

//Middlewares
app.use(cors());
app.use(bodyParser.json());

//Import Routes
const postsRoute = require('./routes/posts')

//Middleware
app.use('/posts', postsRoute);

// ROUTES
app.get('/', (req, res) => {
    res.send('We are on home');
});

// Connect to DB
mongoose.connect(process.env.DB_CONNECT,
    { useUnifiedTopology: true },
    () => console.log('connected to db!')
);


//How do we start listening to the server
app.listen(3000, () => console.log('Server Up and running'));