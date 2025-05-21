import React from "react";
import type { BlogPost } from "../types/BlogPost";

const mockPosts: BlogPost[] = [
  {
    id: 1,
    title: "Mastering React with TypeScript",
    excerpt: "Learn how to build robust applications using TypeScript and React.",
    date: "May 10, 2025",
    author: "Jane Doe",
  },
  {
    id: 2,
    title: "Tailwind CSS Tips and Tricks",
    excerpt: "Speed up your frontend workflow with these Tailwind techniques.",
    date: "May 12, 2025",
    author: "John Smith",
  },
  {
    id: 3,
    title: "Deploying with Vercel",
    excerpt: "A step-by-step guide on deploying your React apps with Vercel.",
    date: "May 15, 2025",
    author: "Alex Johnson",
  },
  {
    id: 4,
    title: "Improving Web Performance",
    excerpt: "Techniques to optimize your website speed and SEO.",
    date: "May 18, 2025",
    author: "Emily Clark",
  },
];

const BlogPosts: React.FC = () => {
  return (
    <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-2">
      {mockPosts.map((post) => (
        <div
          key={post.id}
          className="bg-white rounded-2xl shadow-md p-6 hover:shadow-lg transition-shadow duration-300"
        >
          <h3 className="text-xl font-semibold mb-2 text-gray-800">{post.title}</h3>
          <p className="text-gray-600 mb-4">{post.excerpt}</p>
          <div className="text-sm text-gray-500">
            {post.date} · {post.author}
          </div>
        </div>
      ))}
    </div>
  );
};

export default BlogPosts;
