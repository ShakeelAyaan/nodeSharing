require('dotenv').config();
const mongoose = require('mongoose');
function connectDB() {
    // Database connection 🥳
    mongoose.connect("mongodb+srv://shakeelayaan93:llwLrxNcW7KNu7FL@cluster0.6s7gtjx.mongodb.net/", { useNewUrlParser: true, useCreateIndex:true, useUnifiedTopology: true, useFindAndModify : true });
    const connection = mongoose.connection;
    connection.once('open', () => {
        console.log('Database connected 🥳🥳🥳🥳');
    }).catch(err => {
        console.log('Connection failed ☹️☹️☹️☹️');
    });
}

// mIAY0a6u1ByJsWWZ

module.exports = connectDB;