import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
// import { getUsers } from "../../redux/action";

function ListProducts() {
  const [productData, setProductData] = useState([]);
  const [deleted, setDeleted] = useState(false);

  //loading product Data

  useEffect(() => {
    axios
      .get("http://localhost:3000/users/products/")
      .then((response) => {
        setProductData(response.data.productData);
        setDeleted(false);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [deleted]);

  //delete operation
  const handleDelete = (e, id) => {
    axios
      .delete(`http://localhost:3000/users/products/${id}`)
      .then((response) => {
        console.log(`deleted: ${response.data}`);

        setDeleted(true);
        alert("Product is being deleted");
      })
      .catch((err) => {
        console.log(`error : ${err}`);
      });
  };

  return (
    <div align="center">
      <div className="card border-light mb-3" id="productlist">
        <div className="card-header">Product List</div>
        <div className="card-body">
          <form>
            <table className="table">
              <thead>
                <tr align="center">
                  <td>Product Name</td>
                  <td>Price</td>
                  <td>Quantity</td>
                  <td>Vendor</td>
                  <td>Warranty</td>
                  <td colSpan="2">Actions</td>
                </tr>
              </thead>
              <tbody>
                {productData.map((product) => {
                  return (
                    <tr align="center">
                      <td>{product.productName}</td>
                      <td>{product.price}</td>
                      <td>{product.quantity}</td>
                      <td>{product.vendor}</td>
                      <td>{product.warranty}</td>
                      <td>
                        <Link
                          className="btn btn-primary"
                          to={`/updateProduct/${product._id}`}
                        >
                          Edit
                        </Link>
                      </td>
                      <td>
                        <input
                          type="button"
                          value="delete"
                          className="btn btn-danger"
                          onClick={(e) => handleDelete(e, product._id)}
                        />
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </form>
        </div>
      </div>
    </div>
  );
}

export default ListProducts;
