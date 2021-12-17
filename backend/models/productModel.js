const mongoose = require("mongoose");

const productDataSchema = new mongoose.Schema({
  productName: {
    type: String,
    required: [true, "productName is required"],
  },
  price: {
    type: Number,
    required: [true, "price is required"],
  },
  quantity: {
    type: Number,
    required: [true, "quantity is required"],
  },
  vendor: {
    type: String,
    required: [true, "vendor is required"],
  },
  warranty: {
    type: Number,
    required: [true, "warranty is required"],
  },
});

const productData = mongoose.model("productData", productDataSchema);

module.exports = productData;
