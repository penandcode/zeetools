import React from "react";
import Dashboard from "./components/Dashboard";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import NotFound from "./components/NotFound";
import Submit from "./components/Submit";
import Footer from "./components/Footer";
import About from "./components/About";

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route index element={<Dashboard />} />
          {/* <Route path="/submit" element={<Submit />} /> */}
          <Route path="/about" element={<About />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
};

export default App;
