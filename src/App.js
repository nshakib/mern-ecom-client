import React, { Fragment } from "react";
import Home from "./pages/Home";

import { Route, BrowserRouter, Routes } from "react-router-dom";
import LoginPage from "./pages/LoginPage";
import ProfilePage from "./pages/ProfilePage";
import Page404 from "./pages/Page404";
import RegistrationPage from "./pages/RegistrationPage";


function App() {
  return (
    <Fragment>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/Product" element={<Home />}></Route>
          <Route path="/ProductList" element={<Home />}></Route>
          <Route path="/Cart" element={<Home />}></Route>
          <Route path="/Checkout" element={<Home />}></Route>
          <Route path="/Profile" element={<ProfilePage/>}></Route>
          <Route path="/Login" element={<LoginPage />}></Route>
          <Route path="/Registration" element={<RegistrationPage/>}></Route>
          <Route path="*" element={<Page404 />}></Route>
        </Routes>
      </BrowserRouter>
    </Fragment>
  );
}

export default App;
