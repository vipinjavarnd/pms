import React, { useState } from "react";
import "./../../css/index.css";
import axios from "axios";
import { useNavigate } from "react-router";

function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  //to navigate to registration page
  const navigate = useNavigate();
  const handleRegistration = (e) => {
    navigate("/Registration");
  };

  //check for authentication login
  async function getLoginData(e) {
    e.preventDefault();
    console.log(JSON.stringify({ username, password }));
    if (!username) {
      alert("Please Enter Username");
    } else if (!password) {
      alert("Please Enter Password");
    } else {
      sessionStorage.setItem("users", username);

      await axios
        //post request for login
        .post("http://localhost:3000/login", {
          username: username,
          password: password,
        })
        .then(function (response) {
          if (response.data.status === "Successful") {
            console.log(response.data, "////////////");
            const result = response.data;

            navigate("/viewItems");
            console.log(result);
          } else {
            console.log(response.data, "############");
            console.log(response.status);
            sessionStorage.removeItem("users");
            alert("Invalid User");
          }
        })
        .catch((err) => {
          console.log(err);
        });
    }
    //fetch user detail from db

    //login credential posting to match the database for authetication part
  }

  return (
    <div align="center">
      <div className="card border-light mb-3" id="card">
        <div className="card-header">Login</div>
        <div className="card-body">
          <form onSubmit={getLoginData}>
            <table border>
              <tr>
                <td>Username</td>
                <td>
                  <input
                    type="text"
                    name="username"
                    id="username"
                    value={username}
                    placeholder="JohnDoe"
                    className="form-control"
                    onChange={(e) => setUsername(e.target.value)}
                  />
                </td>
              </tr>
              <tr>
                <td>Password</td>
                <td>
                  <input
                    type="password"
                    name="password"
                    value={password}
                    id="password"
                    placeholder="*********"
                    className="form-control"
                    onChange={(e) => setPassword(e.target.value)}
                  />
                </td>
              </tr>
              <tr align="center">
                <td colSpan="2">
                  <input
                    type="submit"
                    className="btn btn-primary"
                    id="loginBtn"
                  />
                </td>
              </tr>
              <tr>
                <td colSpan="2">
                  <input
                    type="button"
                    id="regBtn"
                    value="Registration"
                    className="btn btn-danger"
                    onClick={handleRegistration}
                  />
                </td>
              </tr>
            </table>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Login;
