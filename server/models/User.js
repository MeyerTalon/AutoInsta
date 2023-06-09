const { Schema, model } = require('mongoose');
const bcrypt = require('bcrypt');
const postSchema = require('./Post');

const userSchema = new Schema(
  {
    username: {
      type: String,
      required: true,
      unique: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
      match: [/.+@.+\..+/, 'Must use a valid email address'],
    },
    password: {
      type: String,
      required: true,
    },
    instaUsername: {
      type: String,
      required: true,
    },
    instaPassword: {
      type: String,
      required: true,
    },
    posts: [postSchema],
  },
  {
    toJSON: {
      virtuals: true,
    },
  }
);

// hash user password and insta password
userSchema.pre('save', async function (next) {
  if (this.isNew || this.isModified('password')) {
    const saltRounds = 10;
    this.password = await bcrypt.hash(this.password, saltRounds);
  }

  if (this.isNew || this.isModified('instaPassword')) {
    const saltRounds = 10;
    this.instaPassword = await bcrypt.hash(this.instaPassword, saltRounds);
  }

  next();
});

// custom method to compare and validate password for logging in
userSchema.methods.isCorrectPassword = async function (password) {
  return bcrypt.compare(password, this.password);
};

const User = model('User', userSchema);

module.exports = User;
