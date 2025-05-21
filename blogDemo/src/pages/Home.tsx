import React from "react";
import BlogPosts from "../components/BlogPosts";
import Header from "../components/Header";

const Home: React.FC = () => {
    return (
        <>
            <Header />
            <div className="min-h-screen bg-gray-50 p-6">
                <div className="max-w-5xl mx-auto">
                    <header className="mb-10 text-center">
                        <h1 className="text-4xl font-bold text-gray-800 mb-2">Welcome to the Blog</h1>
                        <p className="text-gray-600 text-lg">
                            Discover the latest insights and tutorials in web development.
                        </p>
                    </header>
                    <BlogPosts />
                </div>
            </div>
        </>
    );
};

export default Home;
