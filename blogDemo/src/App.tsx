import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import BlogDetail from "./pages/BlogDetail.tsx";
import Home from "./pages/Home";
import Gallery from "./pages/Gallery.tsx";

const App: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/blog/:id" element={<BlogDetail />} />
        <Route path="/gallery" element={<Gallery />} />
      </Routes>
    </Router>
  );
};

export default App;
