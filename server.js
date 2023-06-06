require('dotenv').config();
const express = require('express');
const app = express()
const PORT = process.env.PORT || 3000;
const path = require('path');
const cors = require('cors');
// Cors
const corsOptions = {
<<<<<<< HEAD
  origin: process.env.ALLOWED_CLIENTS.split(','),
=======
  origin:http://127.0.0.1:3000.split(',')
    // origin: "http://localhost:3000,http://localhost:3300".split(',')
  // ['http://localhost:3000', 'http://localhost:5000', 'http://localhost:3300']
>>>>>>> 6e6c8ae42cd8958e1682cbdab61bd1f9d1d0c22a
}

app.use(cors())
app.use(express.json());

app.use(express.static('public'));

const connectDB = require('./config/db');
connectDB();


app.set('views', path.join(__dirname, '/views'));
app.set('view engine', 'ejs');


// Routes
app.use('/api/files', require('./routes/files'));
app.use('/files', require('./routes/show'));
app.use('/files/download', require('./routes/download'));

<<<<<<< HEAD
app.listen(PORT, console.log(`Listening on port ${PORT}.`));  
=======

app.listen(PORT, console.log(`Listening on port ${PORT}.`));
>>>>>>> 6e6c8ae42cd8958e1682cbdab61bd1f9d1d0c22a
