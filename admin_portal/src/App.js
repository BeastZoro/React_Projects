import React from "react";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Login from "./pages/login";
// import Register from "./pages/register";

import Dashboard from "./pages/dashboard";
import Products from "./pages/products";
import Users from "./pages/users";
import AdminLayout from "./layout/admin";
import RegisterRedux from "./pages/registerRedux";



function App() {
  return (
    <>
      <Router>
        <Routes>

          <Route path="/login" element={<Login />} />

          <Route path="/register" element={<RegisterRedux />}/>

          <Route element={<AdminLayout />}>
            <Route exact path="/" element={<Dashboard />}/>
            <Route path="/users" element={<Users />}/>
            <Route path="products" element={<Products />}/>
          </Route>

        </Routes>
      </Router>
    </>
  );
}

export default App;
