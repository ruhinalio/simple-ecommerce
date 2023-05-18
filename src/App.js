import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./components/navbar/Navbar";
import PageContainer from "./containers/PageContainer";
// react slick
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

// pages
import Header from "./pages/Home";
import Detail from "./pages/Detail";
import Cart from "./pages/Cart";
function App() {
  return (
    <div>
      <PageContainer>
        <Router>
          <Navbar />
          <Routes>
            <Route path="/" element={<Header />} />
            <Route path="/products/:id" element={<Detail />} />
            <Route path="/cart" element={<Cart />} />
          </Routes>
        </Router>
      </PageContainer>
    </div>
  );
}

export default App;
