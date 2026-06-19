import { BrowserRouter, Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";

import Footer from "./components/Footer";

import Products from "./pages/Products";

import ProductDetails from "./pages/ProductDetails";

import Login from "./pages/Login";

import Register from "./pages/Register";

import Cart from "./pages/Cart";

import Wishlist from "./pages/Wishlist";

import Orders from "./pages/Orders";

import Profile from "./pages/Profile";

import Address from "./pages/Address";

import AdminDashboard from "./pages/AdminDashboard";

import AdminProducts from "./pages/AdminProducts";

import AdminCategories from "./pages/AdminCategories";

import AdminOrders from "./pages/AdminOrders";

import NotFound from "./pages/NotFound";

import { useState } from "react";

import Payment from "./pages/Payment";

import OrderSuccess from "./pages/OrderSuccess";

function App() {
  const [keyword, setKeyword] = useState("");

  return (
    <BrowserRouter>
      {/* Navbar */}

      <Navbar keyword={keyword} setKeyword={setKeyword} />
      {/* Main Content */}

      <div className="container mt-4">
        <Routes>
          <Route path="/" element={<Products keyword={keyword} />} />

          <Route path="/login" element={<Login />} />

          <Route path="/register" element={<Register />} />

          <Route path="/product/:id" element={<ProductDetails />} />

          <Route path="/cart" element={<Cart />} />

          <Route path="/wishlist" element={<Wishlist />} />

          <Route path="/orders" element={<Orders />} />

          <Route path="/profile" element={<Profile />} />

          <Route path="/address" element={<Address />} />

          <Route path="/admin" element={<AdminDashboard />} />

          <Route path="/admin/products" element={<AdminProducts />} />

          <Route path="/admin/categories" element={<AdminCategories />} />

          <Route path="/admin/orders" element={<AdminOrders />} />

          <Route path="/payment" element={<Payment />} />

          <Route path="/order-success" element={<OrderSuccess />} />

          <Route path="*" element={<NotFound />} />
        </Routes>
      </div>

      {/* Footer */}

      <Footer />
    </BrowserRouter>
  );
}

export default App;
