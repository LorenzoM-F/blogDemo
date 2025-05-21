import React from "react";

// Sample image imports – replace these with your actual images
import img1 from "../assets/blog1.jpg";
import img2 from "../assets/blog2.jpg";
import img3 from "../assets/blog3.jpg";
import img4 from "../assets/blog4.jpg";
import img5 from "../assets/blog1.jpg";
import img6 from "../assets/blog2.jpg";
import Header from "../components/Header";
import Footer from "../components/Footer";

const galleryImages = [img1, img2, img3, img4, img5, img6];

const Gallery: React.FC = () => {
    return (
        <>
            <Header />
            <section className="max-w-7xl min-h-screen mx-auto px-6 py-12">
                <h2 className="text-3xl font-bold text-center text-gray-800 mb-8">Gallery</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                    {galleryImages.map((img, index) => (
                        <div key={index} className="overflow-hidden rounded-sm shadow-md">
                            <img
                                src={img}
                                alt={`Gallery image ${index + 1}`}
                                className="w-full h-64 object-cover hover:scale-105 transition-transform duration-300"
                            />
                        </div>
                    ))}
                </div>
            </section>
            <Footer />
        </>
    );
};

export default Gallery;
