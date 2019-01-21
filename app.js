const express = require("express");
const fs = require('fs');
const morgan = require('morgan');
const path = require('path');
var app = express();

var accessLogStream = fs.createWriteStream(path.join(__dirname, 'access.log'), { flags: 'a' })
 
// setup the logger
app.use(morgan('combined', { stream: accessLogStream }))

app.get('/', (req,res) => {
    res.send("We in the building");
})

app.listen(3000, () => {
    console.log("The server is now running");
});