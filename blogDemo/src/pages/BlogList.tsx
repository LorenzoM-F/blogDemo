import React from "react";
import { Link } from "react-router-dom";
import { blogPosts } from "../data/posts";

const BlogList: React.FC = () => {
  const displayedPosts = blogPosts.slice(0, 3); // Show only first 3 posts

  return (
    <div className="max-w-7xl mx-auto">
      <div className="grid gap-6 sm:grid-cols-3 lg:grid-cols-3 p-6">
        {displayedPosts.map((post) => (
          <Link to={`/blog/${post.id}`} key={post.id}>
            <div className="bg-white rounded-sm shadow-md hover:shadow-lg transition-shadow duration-300 overflow-hidden">
              <img
                src={post.image}
                alt={post.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2 text-gray-800">
                  {post.title}
                </h3>
                <p className="text-gray-600 mb-4">{post.excerpt}</p>
                <div className="text-sm text-sky-300">
                  {post.date} · {post.author}
                </div>
              </div>
            </div>
          </Link>
        ))}
      </div>

      {/* See More Blogs Button */}
      <div className="flex justify-center mb-10">
        <Link
          to="#blogs" // Assuming you have a route for all blogs here
          className="px-6 py-2 bg-sky-400 text-white rounded-md hover:bg-sky-500 transition"
        >
          See More Blogs
        </Link>
      </div>
    </div>
  );
};

export default BlogList;
