import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router";
import "./../../css/index.css";

function Registration() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  async function postRegForm(e) {
    e.preventDefault();
    //console.log(JSON.stringify({ name, email, phone, username, password }));

    await axios
      .post("http://localhost:3000/register", {
        name: name,
        email: email,
        phone: phone,
        username: username,
        password: password,
      })
      .then(function (response) {
        alert("User Added Successfully");
        navigate("/");
      })
      .catch(function (error) {
        console.log(error);
      });
  }
  return (
    <div align="center">
      <form onSubmit={postRegForm}>
        <div class="card border-primary mb-3" id="regForm">
          <div class="card-header">Registration</div>
          <div class="card-body">
            <table>
              <tr>
                <td>Name</td>
                <td>
                  <input
                    type="text"
                    className="form-control"
                    name="name"
                    id="name"
                    placeholder="John Doe"
                    onChange={(e) => setName(e.target.value)}
                  />
                </td>
              </tr>
              <tr>
                <td>Email</td>
                <td>
                  <input
                    type="email"
                    className="form-control"
                    placeholder="johndoe@mail.com"
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </td>
              </tr>
              <tr>
                <td>Phone </td>
                <td>
                  <input
                    type="number"
                    className="form-control"
                    placeholder="9874563211"
                    onChange={(e) => setPhone(e.target.value)}
                  />
                </td>
              </tr>
              <tr>
                <td>UserName</td>
                <td>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="JohnDoe"
                    onChange={(e) => setUsername(e.target.value)}
                  />
                </td>
              </tr>
              <tr>
                <td>Password</td>
                <td>
                  <input
                    type="password"
                    className="form-control"
                    placeholder="*********"
                    onChange={(e) => setPassword(e.target.value)}
                  />
                </td>
              </tr>
              <tr>
                <td align="center" colSpan="2">
                  <input type="submit" className="btn btn-danger" id="regBtn" />
                </td>
              </tr>
            </table>
          </div>
        </div>
      </form>
    </div>
  );
}

export default Registration;
