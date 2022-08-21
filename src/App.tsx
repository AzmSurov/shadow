import React from "react";
import "./App.css";
import Footer from "./components/Footer";
import Main from "./components/Main";
import Navbar from "./components/Navbar";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import TextGradient from "./components/TextGradient";
import Colors from "./components/Colors";

function App() {
 

  return (
    <div className="bg-slate-900">
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
      <Route path="/colors" element={
        <Colors />
      }>
      </Route>

    </Routes>
    <Footer />
  </BrowserRouter>

    </div>
  );
}

export default App;
