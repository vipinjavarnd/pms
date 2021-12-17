const productData = require("./../models/productModel");

//listing all products
exports.getAllProduct = async (req, res) => {
  const getProductData = await productData.find();
  if (!getProductData) {
    res.status(404).json({
      status: "failed",
      message: err.message,
    });
  }

  res.status(200).json({
    status: "success",
    productData: getProductData,
  });
};
//write a new product
exports.addNewProduct = async (req, res) => {
  console.log(req.body);
  try {
    const { productName, price, quantity, vendor, warranty } = req.body;
    if (!productName) {
      return res.json({
        status: "error",
        error: "Invalid Product Name",
      });
    }
    if (!price) {
      return res.json({
        status: "error",
        error: "Invalid Price",
      });
    }
    if (!quantity) {
      return res.json({
        status: "error",
        error: "Invalid Quantity",
      });
    }
    if (!vendor) {
      return res.json({
        status: "error",
        error: "Invalid Vendor",
      });
    }
    if (!warranty) {
      return res.json({
        status: "error",
        error: "Invalid Warranty",
      });
    }

    const addNewProduct = await productData.create({
      productName: productName,
      price: price,
      quantity: quantity,
      vendor: vendor,
      warranty: warranty,
    });
    res.status(201).json({
      status: "success",
      message: "Product Added Successfully",
      userData: addNewProduct,
    });
  } catch (err) {
    res.status(404).json({
      status: "Unsuccessful",
      err: err.message,
    });
  }
};

// CRUD Operations Below////

//read product

exports.getProduct = async (req, res) => {
  const id = req.params.id;
  const get_Product = await productData.findById(id, req.body);
  if (!get_Product) {
    res.status(404).json({
      status: "Unsuccessful",
      message: "Record Not Found",
    });
  }
  res.status(201).json({
    status: "success",
    userData: get_Product,
  });
};

//updating product
exports.updateProduct = async (req, res) => {
  try {
    const id = req.params.id;
    const { productName, price, quantity, vendor, warranty } = req.body;
    console.log(req.body);
    const update_Product = await productData.findByIdAndUpdate(id, req.body);

    res.status(201).json({
      status: "success",
      message: "Data Updated SuccessFully",
      userData: update_Product,
    });
  } catch (err) {
    res.status(404).json({
      status: "Unsuccessful",
      err: err.message,
    });
  }
};
//delete product
exports.deleteProduct = async (req, res) => {
  try {
    const id = req.params.id;
    const deleteProduct = await productData.findByIdAndDelete(id, req.body);
    res.status(200).json({
      status: "success",
      message: "Data Deleted Successfully",
      userData: deleteProduct,
    });
  } catch (err) {
    res.status(404).json({
      status: "Unsuccessful",
      err: err.message,
    });
  }
};
