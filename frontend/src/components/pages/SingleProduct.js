import React, { useParams } from "react";
import axios from "axios";

export default function SingleProduct() {
  const id = useParams();
  function getProduct(e) {
    e.preventDefault();
    axios.get(`http://localhost:3000/users/products/id:${id}`).then(
      (response) => {
        var result = response.data;
        console.log(result, "///////////////////////////");
      },
      (error) => {
        console.log(error);
      }
    );
  }
  return (
    <div align="center">
      <div className="card border-light mb-3" style={{ maxWidth: "50rem" }}>
        <div className="card-header">Product List</div>
        <div className="card-body">
          <form onSubmit={getProduct}>
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
                <tr align="center">
                  <td>asdasd</td>
                  <td>asdas</td>
                  <td>asdas</td>
                  <td>asdas</td>
                  <td>sadas</td>
                  <td>
                    <input
                      type="button"
                      value="edit"
                      className="btn btn-primary"
                      onClick={getProduct}
                    />
                  </td>
                  <td>
                    <input
                      type="button"
                      value="delete"
                      className="btn btn-danger"
                    />
                  </td>
                </tr>
              </tbody>
            </table>
          </form>
        </div>
      </div>
    </div>
  );
}
