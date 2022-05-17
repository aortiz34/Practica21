const mongoose = require('mongoose');
const express = require('express');
const personsRoutes = require('./routes/persons');
mongoose.Promise = global.Promise;
const app = express(); 
var port = process.env.PORT || 3000;
app.set('view engine', 'ejs');
app.use(express.urlencoded( {extended:false}));
app.use(personsRoutes);



mongoose.connect
('mongodb+srv://user1:user1@cluster0.fnprl.mongodb.net/?retryWrites=true&w=majority', {
    useUnifiedTopology: true,
    useNewUrlParser: true
});

const db = mongoose.connection;
db.on("error", console.error.bind(console, "conection error: "));
db.once("open", function() {
    console.log("Connected succesfully");
});

app.listen(port);