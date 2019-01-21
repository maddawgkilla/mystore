const express = require("express");
require('dotenv').config();
var winston = require("winston");
const logger = winston.createLogger({
    level: 'info',
    format: winston.format.json(),
    transports: [
      //
      // - Write to all logs with level `info` and below to `combined.log` 
      // - Write all logs error (and below) to `error.log`.
      //
      new winston.transports.File({ filename: 'error.log', level: 'error' }),
      new winston.transports.File({ filename: 'combined.log' })
    ]
  });
   
  //
  // If we're not in production then log to the `console` with the format:
  // `${info.level}: ${info.message} JSON.stringify({ ...rest }) `
  // 
  if (process.env.NODE_ENV !== 'production') {
      console.log("this is production");
    logger.add(new winston.transports.Console({
      format: winston.format.simple()
    }));
  }
var app = express();

app.get('/', (req,res) => {
    res.send("We in the building");
})

app.listen(3000, () => {
    console.log("The server is now running");
});