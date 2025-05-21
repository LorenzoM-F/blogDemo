import React from "react";
import bakingImage from "../assets/blog1.jpg"; // Make sure this path matches your actual image

const About: React.FC = () => {
  return (
    <section className="max-w-7xl mx-auto px-6 py-12 border-t-1 border-gray-200">
      <div className="flex flex-col md:flex-row items-center gap-10">
        {/* Image Section */}
        <div className="w-full md:w-1/2">
          <img
            src={bakingImage}
            alt="About us"
            className="w-full h-auto rounded-xl shadow-md object-cover"
          />
        </div>

        {/* Text Section */}
        <div className="w-full md:w-1/2 text-center md:text-left">
          <h2 className="text-3xl font-bold text-gray-800 mb-4">About Us</h2>
          <p className="text-gray-600 text-lg leading-relaxed">
            Welcome to our baking blog and shop! We’re passionate about sharing baking tips, delicious recipes, and offering quality baking products to help you create magic in your kitchen.
            <br /><br />
            Whether you're a seasoned baker or just getting started, there's something here for you. Join us in making the world a little sweeter, one bake at a time.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
