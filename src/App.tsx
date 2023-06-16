import React from "react";
import "./App.scss";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";
import Main from "./pages/Main";
import DiscountsPages from "./pages/DiscountsPages";
import ProductCartPages from "./pages/ProductCartPages";
import PageInDevelompment from "./pages/PageInDevelompment";
import CartPages from "./pages/CartPages";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Header />
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="discounts" element={<DiscountsPages />} />
          <Route path="product-cart/:id" element={<ProductCartPages />} />
          <Route path="page-in-development" element={<PageInDevelompment />} />
          <Route path="cart" element={<CartPages />} />
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
