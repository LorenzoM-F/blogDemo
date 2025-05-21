import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import BlogDetail from "./pages/BlogDetail.tsx";
import Home from "./pages/Home";
import Gallery from "./pages/Gallery.tsx";
import Contact from "./pages/Contact.tsx";

const App: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/blog/:id" element={<BlogDetail />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </Router>
  );
};

export default App;
