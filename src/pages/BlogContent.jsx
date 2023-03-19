import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import BlogContentComponent from "../components/BlogContent";

const BlogContent = ({blogs}) => {
  
  return (
    <div>
      <Navbar />
      <BlogContentComponent blogs={blogs}/> 
      <Footer />
    </div>
  );
};

export default BlogContent;
 