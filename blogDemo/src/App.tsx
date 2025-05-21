import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import BlogDetail from "./pages/BlogDetail.tsx";
import BlogList from "./pages/BlogList.tsx";
import Home from "./pages/Home";
import AllBlogs from "./pages/AllBlogs.tsx";

const App: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/blog/:id" element={<BlogDetail />} />
      </Routes>
    </Router>
  );
};

export default App;
