const express = require("express");
const productController = require("./../controllers/productController");
const router = express.Router();

// For product listing
router
  .route("/users/products")
  .get(productController.getAllProduct)
  .post(productController.addNewProduct);

//CRUD Operation
router
  .route("/users/products/:id")
  .get(productController.getProduct)
  .patch(productController.updateProduct)
  .delete(productController.deleteProduct);

module.exports = router;
