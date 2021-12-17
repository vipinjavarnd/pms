import React from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router";

function Navbar() {
  const navigate = useNavigate();
  const uname = JSON.stringify(sessionStorage.getItem("users"));
  console.log(uname);
  const handleLogout = () => {
    sessionStorage.removeItem("users");
    navigate("/");
  };
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
        <div className="container-fluid">
          <Link className="navbar-brand" to="/">
            Product Management System
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarColor01"
            aria-controls="navbarColor01"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="navbarColor01">
            <ul className="navbar-nav me-auto">
              {/* Navigation validation based on session storage, show login & registration if user in not login*/}
              {!sessionStorage.getItem("users") ? (
                <>
                  <li className="nav-item">
                    <Link className="nav-link active" to="/">
                      Login
                      <span className="visually-hidden">(current)</span>
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link" to="/Registration">
                      Registration
                    </Link>
                  </li>
                </>
              ) : sessionStorage.getItem("users") ? (
                <li className="nav-item">
                  <h3 className="nav-link">Welcome {uname}</h3>
                </li>
              ) : (
                ""
              )}

              {/* Navigation validation based on session storage, view data and add data if user is login*/}
              {sessionStorage.getItem("users") ? (
                <>
                  <li className="nav-item">
                    <Link className="nav-link" to="/viewItems">
                      View Products
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link" to="/addItem">
                      Add Products
                    </Link>
                  </li>
                </>
              ) : (
                ""
              )}
              {/*Logout Validation*/}
              {sessionStorage.getItem("users") ? (
                <li className="nav-item">
                  <div className="nav-link">
                    <button className="btn btn-danger" onClick={handleLogout}>
                      Logout
                    </button>
                  </div>
                </li>
              ) : (
                ""
              )}
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
