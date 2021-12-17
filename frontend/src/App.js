import React from "react";
import "./App.css";
import "./css/index.css";
import { Link } from "react-router-dom";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/navigation/Navbar";
import Login from "./components/pages/Login";
import Registration from "./components/pages/Registration";
import ListProducts from "./components/pages/ListProducts";
import AddProduct from "./components/pages/AddProduct";
import UpdateProduct from "./components/pages/UpdateProduct";

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Routes>
          <Route exact path="/" element={<Login />} />
          <Route path="/registration" element={<Registration />} />
          <Route path="/viewItems" element={<ListProducts />} />
          <Route path="/addItem" element={<AddProduct />} />
          <Route path="/updateProduct/:productId" element={<UpdateProduct />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
