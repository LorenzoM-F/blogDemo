import React from "react";
import { useParams, Link } from "react-router-dom";
import { blogPosts } from "../data/posts";
import Header from "../components/Header";
import Footer from "../components/Footer";

const BlogDetail: React.FC = () => {
    const { id } = useParams<{ id: string }>();
    const post = blogPosts.find((p) => p.id === Number(id));

    const otherPosts = blogPosts.filter((p) => p.id !== Number(id));

    if (!post) {
        return <div className="p-6 text-red-500">Blog post not found.</div>;
    }

    return (
        <>
            <Header />
            <div className="max-w-7xl min-h-screen mx-auto grid grid-cols-1 lg:grid-cols-4 gap-6 p-6">
                {/* Main blog content */}
                <div className="lg:col-span-3">
                    <Link to="/" className="text-sky-300 underline mb-4 block">← Back</Link>
                    <img src={post.image} alt={post.title} className="w-full h-64 object-cover rounded-lg mb-6" />
                    <h1 className="text-3xl font-bold text-gray-900 mb-2">{post.title}</h1>
                    <p className="text-gray-500 text-sm mb-4">{post.date} · {post.author}</p>
                    <p className="text-gray-700 leading-relaxed whitespace-pre-line">{post.content}</p>
                </div>

                {/* Sidebar */}
                <aside className="lg:col-span-1 border-l border-gray-200 pl-4">
                    <h2 className="text-xl font-semibold mb-4 text-gray-700">Other Posts</h2>
                    <ul className="space-y-4">
                        {otherPosts.map((p) => (
                            <li key={p.id} className="pb-2 border-b-1 border-gray-200">
                                <Link to={`/blog/${p.id}`} className="block hover:text-sky-500 transition">
                                <img src={p.image} alt={p.title} className="w-full h-30 object-cover rounded-lg mb-6" />
                                    <div className="text-sm font-medium text-gray-800">{p.title}</div>
                                    <div className="text-xs text-gray-500">{p.date}</div>
                                </Link>
                            </li>
                        ))}
                    </ul>
                </aside>
            </div>
            <Footer />
        </>
    );
};

export default BlogDetail;
