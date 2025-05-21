import React, { useState } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";

const Contact: React.FC = () => {
    const [form, setForm] = useState({ name: "", email: "", message: "" });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setForm({ ...form, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        console.log("Contact form submitted:", form);
        alert("Message sent!");
        setForm({ name: "", email: "", message: "" });
    };

    return (
        <>
            <Header />
            <section className="max-w-6xl min-h-screen mx-auto px-6 py-12">
                <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">Contact Us</h2>
                <div className="grid gap-8 md:grid-cols-2">
                    {/* Contact Form */}
                    <form onSubmit={handleSubmit} className="space-y-6">
                        <div>
                            <label htmlFor="name" className="block mb-1 font-medium text-gray-700">
                                Name
                            </label>
                            <input
                                id="name"
                                name="name"
                                value={form.name}
                                onChange={handleChange}
                                required
                                className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-sky-300"
                                type="text"
                            />
                        </div>
                        <div>
                            <label htmlFor="email" className="block mb-1 font-medium text-gray-700">
                                Email
                            </label>
                            <input
                                id="email"
                                name="email"
                                value={form.email}
                                onChange={handleChange}
                                required
                                type="email"
                                className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-sky-300"
                            />
                        </div>
                        <div>
                            <label htmlFor="message" className="block mb-1 font-medium text-gray-700">
                                Message
                            </label>
                            <textarea
                                id="message"
                                name="message"
                                value={form.message}
                                onChange={handleChange}
                                required
                                rows={5}
                                className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-sky-300"
                            />
                        </div>
                        <button
                            type="submit"
                            className="bg-sky-500 hover:bg-sky-600 text-white px-6 py-2 rounded-lg transition"
                        >
                            Send Message
                        </button>
                    </form>

                    {/* Contact Info / Sidebar */}
                    <div className="text-gray-700 space-y-4">
                        <p>
                            <strong>Email:</strong> support@bakingblog.co.za
                        </p>
                        <p>
                            <strong>Phone:</strong> +27 12 345 6789
                        </p>
                        <p>
                            <strong>Location:</strong> Cape Town, South Africa
                        </p>
                        <p>
                            We'd love to hear from you! Whether you have a question about recipes, products, or collaborations, feel free to reach out.
                        </p>
                    </div>
                </div>
            </section>
            <Footer />
        </>
    );
};

export default Contact;
