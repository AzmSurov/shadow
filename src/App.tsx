import React from "react";
import "./App.css";
import Footer from "./components/Footer";
import Main from "./components/Main";
import Navbar from "./components/Navbar";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import TextGradient from "./components/TextGradient";

function App() {
 

  return (
    <div className="bg-gray-900">
      <BrowserRouter>
      <Navbar />
    <Routes>
      <Route path="/" element={
        <Main />
      }>
      </Route>
      <Route path="/text-gradient" element={
        <TextGradient />
      }>

      </Route>

    </Routes>
    <Footer />
  </BrowserRouter>

    </div>
  );
}

export default App;
