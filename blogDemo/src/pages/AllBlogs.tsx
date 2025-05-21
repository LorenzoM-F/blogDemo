import React from "react";
import { useParams, Link } from "react-router-dom";
import { blogPosts } from "../data/posts";
import Header from "../components/Header";
import BlogList from "./BlogList";

const AllBlogs: React.FC = () => {
    return (
        <>
            <Header />
            <BlogList />
        </>
    );
};

export default AllBlogs;
