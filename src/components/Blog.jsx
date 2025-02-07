import React from "react";
import { motion } from "framer-motion";

const Blog = () => {
  const blogs = [
    {
      image: "/src/assets/blog1.png",
      heading: "Design",
      title: "UX review presentations",
      description: "How do you create compelling presentations that wow your colleagues and impress your managers?",
      author: "Olivia Rhye",
      date: "20 Jan, 2024",
      pfp: "/src/assets/pfp1.png",
    },
    {
      image: "/src/assets/blog2.png",
      heading: "Product",
      title: "Migrating to Linear 101",
      description: "Linear helps streamline software projects, sprints, tasks, and bug tracking. Here's how to get started.",
      author: "Phoenix Baker",
      date: "19 Jan, 2024",
      pfp: "/src/assets/pfp4.png",
    },
    {
      image: "/src/assets/blog3.png",
      heading: "Software Engineering",
      title: "Building your API stack",
      description: "The rise of RESTful APIs has been met by a rise in tools for creating, testing, and managing them.",
      author: "Lana Steiner",
      date: "18 Jan, 2024",
      pfp: "/src/assets/pfp5.png",
    },
  ];

  return (
    <div className="max-w-7xl mx-auto p-6">
      {/* Blog Header */}
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-rose-600 text-lg font-semibold">Our Blog</h2>
        <button className="bg-red-500 text-white px-6 py-2 rounded-lg hover:bg-red-700 transition-transform duration-200 hover:scale-109">
          View All Posts
        </button>
      </div>

      {/* Latest Blog Section */}
      <h1 className="text-4xl font-bold text-gray-900">Latest Blog Posts</h1>
      <p className="text-gray-500 text-lg mt-2">Tools and strategies modern teams need to help their companies grow.</p>

      {/* Blog Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-6">
        {blogs.map((blog, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.2 }}
            whileHover={{ scale: 1.05 }}
          >
            <div className="bg-white shadow-lg rounded-lg p-4 relative">
              <img src={blog.image} alt={blog.title} className="w-full h-56 object-cover rounded-lg" />
              
              {/* Red Heading */}
              <h3 className="text-red-500 text-sm font-bold mt-4">{blog.heading}</h3>

              {/* Title with Arrow */}
              <div className="flex justify-between items-center mt-2">
                <h2 className="text-xl font-semibold text-gray-900">{blog.title}</h2>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="w-5 h-5 text-gray-900"
                >
                  <path d="M7 7h10v10" />
                  <path d="M7 17 17 7" />
                </svg>
              </div>

              <p className="text-gray-600 mt-2">{blog.description}</p>

              {/* Author Info */}
              <div className="flex items-center mt-4">
                <img src={blog.pfp} alt={blog.author} className="w-10 h-10 rounded-full mr-3" />
                <div>
                  <p className="text-black font-semibold">{blog.author}</p>
                  <p className="text-gray-500 text-sm">{blog.date}</p>
                </div>
              </div>
            </div>
          </motion.div>
        ))}
        <br/>
      </div>
    </div>
  );
};

export default Blog;
