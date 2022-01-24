import React from "react";
import Home from "./Home";
import Header from "./Header";
import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Card from "./Card";
import ButtonBackTop from "./ButtonBackTop";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <div className="container">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="card/:id" element={<Card />} />
        </Routes>
          <ButtonBackTop />
      </div>
    </BrowserRouter>
  );
}

export default App;
