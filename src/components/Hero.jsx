import React from "react";

const Hero = () => {
  return (
    <section className="bg-white py-20 mb-0">
      <div className="container mx-auto flex flex-col items-center text-center md:text-center">
        
       {/* New Feature and Link */}
      <div className="md:w-1/1 mb-6 flex justify-center">
        <a
          href="#"
          className="text-rose-600 transition-transform duration-200 hover:scale-109 inline-flex font-semibold items-center text-xs bg-white border border-rose-600 px-2 py-1 rounded-full"
        >
          <span className="bg-white transition-transform duration-200 hover:scale-109 text-rose-600 px-2 py-0.5 font-semibold rounded-full mr-4 text-xs border border-rose-600">
            New Feature
          </span>
          Check out the team dashboard <img src="/src/assets/rightarrow.png"></img>
        </a>
      </div>


        {/* Hero Title and Description */}
        <h1 className="text-3xl md:text-5xl font-bold text-gray-900 mb-4">
          Beautiful analytics to grow smarter
        </h1>
        <p className="text-base md:text-xl text-gray-500 mt-6 md:mt-4 leading-relaxed md:leading-normal">
        Powerful, self-serve product and growth analytics to help you convert, engage,<br/>
        and retain more users. Trusted by over 4,000 startups.
        </p>
        <br/>

        {/* Buttons */}
        <div className="mt-6 flex flex-col md:flex-row justify-center space-x-0 md:space-x-6 space-y-4 md:space-y-0">
          <button className="w-full md:w-auto transition-transform duration-200 hover:scale-109 bg-white hover:bg-gray-300 text-black border border-black px-5 py-2 rounded-full flex items-center justify-center">
            <img src="/play.png" alt="icon" className="w-5 h-5 mr-2" />
            Demo
          </button>

          <button className="w-full md:w-auto transition-transform duration-200 hover:scale-109 bg-red-500 text-white px-6 py-2 rounded-full flex items-center justify-center hover:bg-red-700">
            Sign Up
          </button>
        </div>
        <br/><br/>

        {/* Hero Image */}
        <div className="mt-10 md:mt-0 md:w-1/1 px-5">
          <img
            src="/Container.png"
            alt="Hero Image"
            className="w-full h-auto rounded-lg"
          />
        </div>
        <br/><br/>

        {/* Join 4,000+ companies */}
        <p className="text-lg text-gray-500 text-center justify-center mt-10">Join 4,000+ companies already growing</p>
        <br/><br/>

        {/* Logos Section */}
        <div className="md:w-1/1 mt-10 md:mt-0 px-5 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-6">
          <img src="/logo1.png" alt="Logo 1" className="w-full h-auto rounded-lg" />
          <img src="/logo2.png" alt="Logo 2" className="w-full h-auto rounded-lg" />
          <img src="/logo3.png" alt="Logo 3" className="w-full h-auto rounded-lg" />
          <img src="/logo4.png" alt="Logo 4" className="w-full h-auto rounded-lg" />
          <img src="/logo5.png" alt="Logo 5" className="w-full h-auto rounded-lg" />
          <img src="/logo6.png" alt="Logo 6" className="w-full h-auto rounded-lg" />
        </div>
        
      </div>
    </section>
  );
};

export default Hero;
