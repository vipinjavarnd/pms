import React, { useState } from "react";
import "./../../css/index.css";
import axios from "axios";

function AddProduct() {
  const [productName, setProductName] = useState("");
  const [price, setPrice] = useState("");
  const [quantity, setQuantity] = useState("");
  const [vendor, setVendor] = useState("");
  const [warranty, setWarranty] = useState("");

  //To Add a new productName, validation and create operation
  async function postProductForm(e) {
    e.preventDefault();
    if (!productName) {
      alert("Please add product name");
    } else if (!price) {
      alert("Please add price for your product");
    } else if (!quantity) {
      alert("Please add quantity for your product");
    } else if (!vendor) {
      alert("Please add vendor for your product");
    } else if (!warranty) {
      alert("Please add warranty for your product");
    } else {
      //create/add a new product
      await axios
        .post("http://localhost:3000/users/products", {
          productName: productName,
          price: price,
          quantity: quantity,
          vendor: vendor,
          warranty: warranty,
        })
        .then(function (response) {
          alert("Product added Succesfully");
          setProductName("");
          setPrice("");
          setQuantity("");
          setVendor("");
          setWarranty("");
        })
        .catch(function (error) {
          console.log(error);
        });
    }
  }

  return (
    <div align="center">
      <form onSubmit={postProductForm}>
        <div class="card border-primary mb-3" id="addProduct">
          <div class="card-header">Add New Product</div>
          <div class="card-body">
            <table>
              <tr>
                <td>Product Name</td>
                <td>
                  <input
                    type="text"
                    className="form-control"
                    name="name"
                    value={productName}
                    id="name"
                    onChange={(e) => setProductName(e.target.value)}
                  />
                </td>
              </tr>
              <tr>
                <td>Price</td>
                <td>
                  <input
                    type="text"
                    className="form-control"
                    value={price}
                    onChange={(e) => setPrice(e.target.value)}
                  />
                </td>
              </tr>
              <tr>
                <td>Quantity </td>
                <td>
                  <input
                    type="number"
                    value={quantity}
                    className="form-control"
                    onChange={(e) => setQuantity(e.target.value)}
                  />
                </td>
              </tr>
              <tr>
                <td>Vendor</td>
                <td>
                  <input
                    type="text"
                    value={vendor}
                    className="form-control"
                    onChange={(e) => setVendor(e.target.value)}
                  />
                </td>
              </tr>
              <tr>
                <td>Warranty</td>
                <td>
                  <input
                    type="text"
                    value={warranty}
                    className="form-control"
                    onChange={(e) => setWarranty(e.target.value)}
                  />
                </td>
              </tr>
              <tr>
                <td align="center" colSpan="2">
                  <input
                    type="submit"
                    className="btn btn-info"
                    id="productBtn"
                  />
                </td>
              </tr>
            </table>
          </div>
        </div>
      </form>
    </div>
  );
}

export default AddProduct;
