const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  password: {
    type: String,
  },
  tier: {
    type: String,
  },
  isVerified: {
    type: Boolean,
    default: false,
  },
  apikey: {
    type: String,
  },
  limitApikey: {
    type: Number,
  },
  expiredtier: {
    type: Number,
    default: 90,
  },
});

module.exports = mongoose.model("user", userSchema);
