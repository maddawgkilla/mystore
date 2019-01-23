const express = require("express");
const fs = require('fs');
const morgan = require('morgan');
const path = require('path');
const exphbs = require("express-handlebars");
const mongoose = require("mongoose");
var app = express();

var db = mongoose.connect('mongodb://127.0.0.1:27017/mystoredb', {useNewUrlParser: true});

app.engine('handlebars', exphbs({defaultLayout: 'main'}));
app.set('view engine', 'handlebars');

var accessLogStream = fs.createWriteStream(path.join(__dirname, 'access.log'), { flags: 'a' });

var menuItem = require("./models/menuItem");
 
// setup the logger
app.use(morgan('combined', { stream: accessLogStream }))

app.get('/', (req,res) => {
    menuItem.find().then((foundshit) => {
        // console.log(foundshit);
        res.render('home', {menuItems : foundshit});
    }).catch((err) => {
        console.log(err);
    });
});

// app.get("/inject", (req,res) => {
//     menuItem.create({prod_cat: 'help', prod_order: 99}).then((createdEntry) => {
//         console.log("This is the created Entry: "+createdEntry);
//         res.send("<h1>Route Complete</h1>");
//     }).catch((err) => {
//         res.send("<h1>Error</h1>");
//         console.log("The error is: "+err);
//     });
// });

app.listen(3000, () => {
    console.log("The server is now running");
});