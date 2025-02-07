import React from "react";

const Trial = () => {
  return (
    <div className="flex flex-col items-center text-center py-16 px-6 bg-gray-50">
      {/* Heading */}
      <h1 className="text-3xl md:text-4xl font-bold text-gray-900">
        Start Your Free Trial
      </h1>

      {/* Description */}
      <p className="text-gray-600 text-lg mt-3 max-w-lg">
        Join us today and experience the best analytics tools. No credit card required.
      </p>

      {/* Buttons */}
      <div className="mt-6 flex flex-col md:flex-row gap-4">
        {/* Learn More Button (Transparent) */}
        <button className="border border-gray-500 transition-transform duration-200 hover:scale-109 text-gray-700 px-6 py-2 rounded-lg hover:bg-gray-300">
          Learn More
        </button>

        {/* Get Started Button (Red) */}
        <button className="bg-red-500 transition-transform duration-200 hover:scale-109 text-white px-6 py-2 rounded-lg hover:bg-red-700">
          Get Started
        </button>
      </div>
    </div>
  );
};

export default Trial;
