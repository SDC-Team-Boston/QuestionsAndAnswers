const mongoose = require('mongoose');

const answersSchema = new mongoose.Schema({
  id: Number,
  product_id: Number,
  body: String,
  date_written: Number,
  asker_name: String,
  asker_email: String,
  reported: Boolean,
  helpful: Number,
});

module.exports = mongoose.model("answers", answersSchema);
