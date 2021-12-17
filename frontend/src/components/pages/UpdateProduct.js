import React from "react";
import { useState, useEffect } from "react";
import { useParams } from "react-router";
import axios from "axios";

export default function UpdateProduct(props) {
  const [productData, setProductData] = useState({});
  const [productName, setProductName] = useState({});
  const [price, setPrice] = useState("");
  const [quantity, setQuantity] = useState("");
  const [vendor, setVendor] = useState("");
  const [warranty, setWarranty] = useState({});
  let { productId } = useParams();
  console.log(productName);

  // loading specific data based on ID
  useEffect(() => {
    axios
      //fetch request
      .get(`http://localhost:3000/users/products/${productId}`)
      .then((response) => {
        console.log(response.data.userData);
        setProductData(response.data.userData);
        setProductName(response.data.userData.productName);
        setPrice(response.data.userData.price);
        setQuantity(response.data.userData.quantity);
        setVendor(response.data.userData.vendor);
        setWarranty(response.data.userData.warranty);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  //Updating data
  async function postProductForm(e, id) {
    e.preventDefault();
    //validations
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
      console.log(productName);
      console.log(price);
      //update request
      await axios
        .patch(`http://localhost:3000/users/products/${productId}`, {
          productName: productName,
          price: price,
          quantity: quantity,
          vendor: vendor,
          warranty: warranty,
        })
        .then(function (response) {
          alert("Product updated Succesfully");
          setProductName("");
          setPrice("");
          setQuantity("");
          setVendor("");
          setWarranty("");
        })
        .catch(function (error) {
          console.log(error);
        });
      console.log(productName);
      console.log(price);
    }
  }

  return (
    <div align="center">
      <form onSubmit={postProductForm}>
        <div class="card border-primary mb-3" id="addProduct">
          <div class="card-header">Update Product</div>
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
                    onSubmit={(e) => postProductForm(e, productData._id)}
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
