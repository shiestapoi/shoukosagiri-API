const mongoose = require("mongoose");

const paymentSchema = new mongoose.Schema(
  {
    username: {
      type: String,
    },
    email: {
      type: String,
    },
    id: {
      type: String,
    },
    productName: {
      type: String,
    },
    price: {
      type: String,
    },
    status_payment: {
      type: String,
    },
  },
  { versionKey: false }
);

module.exports = mongoose.model("payment", paymentSchema);
