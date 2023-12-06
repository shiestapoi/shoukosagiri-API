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
  profileImage: {
    data: Buffer, // Menyimpan data gambar dalam bentuk biner
    contentType: String, // Menyimpan tipe konten gambar (misal: "image/jpeg", "image/png", dst.)
  },
});

module.exports = mongoose.model("user", userSchema);
