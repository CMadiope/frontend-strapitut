import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import BlogContentComponent from "../components/BlogContent";

const BlogContent = () => {
  return (
    <div>
      <Navbar />
      <BlogContentComponent/> 
      <Footer />
    </div>
  );
};

export default BlogContent;
 