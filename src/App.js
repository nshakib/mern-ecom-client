import React from "react";
import "./styles/App.css";
import Cart from "./pages/Cart";
import Nav from "./components/Nav";
import Home from "./pages/Home";
import Catalog from "./pages/Catalog";
import Footer from "./components/Footer";
import Product from "./pages/Product";
import { BrowserRouter as Router, Route } from "react-router-dom";

import Signin from "./pages/Signin";
import Register from "./pages/Register";
import ShippingAddress from "./pages/ShippingAddress";
import Success from "./pages/Success";

function App() {
  return (
    <div className="App">
      <Router >
        <Nav />
        <Router>
          <Route path="/" exact element={Home} />
          <Route path="/product/:id?" element={Product}></Route>
          <Route path="/cart/:id" element={Cart} />
          <Route path="/cart" element={Cart} />
          <Route path="/catalog" element={Catalog} />
          <Route path='/signin' element={Signin}/>
          <Route path='/register' element={Register}/>
          <Route path='/shipping' element={ShippingAddress}/>
          <Route path='/success' element={Success}/>
        </Router>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
