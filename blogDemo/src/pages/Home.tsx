import React from "react";
import Header from "../components/Header";
import BlogList from "./BlogList";
import HeroSection from "../components/HeroSection";
import ForSale from "../components/ForSale";
import About from "../components/About";
import Footer from "../components/Footer";

const Home: React.FC = () => {
  return (
    <>
      <Header />
      <div className="w-full min-h-screen bg-gray-50">
        <div className="mx-auto">
          <HeroSection />
          <BlogList />
          <ForSale />
          <About />
          <Footer />
        </div>
      </div>
    </>
  );
};

export default Home;
