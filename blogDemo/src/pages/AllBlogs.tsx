import React from "react";
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
