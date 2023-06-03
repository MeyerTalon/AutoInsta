const { Schema } = require('mongoose');

const postSchema = new Schema({
  caption: {
    type: String,
    required: true,
  },
  imageFile: {
    type: String,
    required: true,
  },
  title: {
    type: String,
    required: true,
  },
  time: {
    type: String
  },
  date: {
    type: String
  },
  interval: {
    type: String
  }
});

module.exports = postSchema;
