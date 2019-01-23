var mongoose = require("mongoose");

const Schema = mongoose.Schema;
const ObjectId = Schema.ObjectId;
 
const MenuItem = new Schema({
  prod_cat: String,
  prod_order: Number,
});

module.exports = mongoose.model('MenuItem', MenuItem);
