import React from 'react';

const Features = () => {
  return (
    <section className="bg-white py-20 mt-0">
      <div className="container mx-auto text-center">
        {/* Dividing line */}
        <hr className="border-t-2 border-gray-200 mx-8 mb-12" />

        <h2 className="text-xl font-bold text-rose-600 mb-6">Features</h2>
        <h1 className="text-3xl font-bold text-gray-900">Analytics that feels like it's from the future</h1>
        <br />
        <p className="text-lg text-gray-500 mb-12">
          Powerful, self-serve product and growth analytics to help you convert, engage,<br />
          and retain more users. Trusted by over 4,000 startups.
        </p>

        {/* Features Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {[1, 2, 3, 4, 5, 6].map((num) => (
            <div key={num} className="bg-white p-6 rounded-lg flex flex-col shadow-lg items-center transition-transform duration-200 hover:scale-105 hover:shadow-xl active:scale-95">
              <div className="text-4xl text-rose-600 mb-4">
                <img src={`/icon${num}.png`} alt={`icon${num}`} /> {/* Image icon */}
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">
                {[
                  "Share team inboxes",
                  "Deliver instant answers",
                  "Manage your team with reports",
                  "Connect with customers",
                  "Connect the tools you already use",
                  "Our people make the difference"
                ][num - 1]}
              </h3>
              <p className="text-gray-600">
                {[
                  "Whether you have a team of 2 or 200, our shared team inboxes keep everyone on the same page and in the loop.",
                  "An all-in-one customer service platform that helps you balance everything your customers need to be happy.",
                  "Measure what matters with Untitled's easy-to-use reports. You can filter, export, and drill down on the data in a couple clicks.",
                  "Solve a problem or close a sale in real-time with chat. If no one is available, customers are seamlessly routed to email without confusion.",
                  "Explore 100+ integrations that make your day-to-day workflow more efficient and familiar. Plus, our extensive developer tools.",
                  "We're an extension of your customer service team, and all of our resources are free. Chat to our friendly team 24/7 when you need help."
                ][num - 1]}
              </p>
            </div>
          ))}
        </div>

        <br /><br />

        {/* Testimonial Section */}
        <div className="bg-gray-50 w-full py-10 flex justify-center px-4">
          <div className="p-6 flex flex-col items-center text-center">
            {/* Logo */}
            <img src="/logo7.png" alt="Logo 7" className="w-20 md:w-24 mb-4 transition-transform duration-300 ease-in-out hover:scale-110 hover:opacity-100" />

            {/* Quote Text */}
            <p className="text-black text-2xl md:text-4xl font-semibold leading-snug md:leading-normal mb-6">
              We've been using Untitled to kickstart every new project and can't imagine working without it.
            </p>

            {/* Profile Picture */}
            <img src="/pfp2.png" alt="profile2" className="w-14 h-14 md:w-16 md:h-16 rounded-full mb-2 transition-transform duration-300 ease-in-out hover:scale-110" />

            {/* User Info */}
            <h3 className="text-lg md:text-xl font-semibold text-gray-900">Candice Wu</h3>
            <p className="text-gray-600 text-sm md:text-base">Product Manager, Sisyphus</p>
          </div>
        </div>

        {/* Dividing line */}
        <hr className="border-t-2 border-gray-200 mx-8 mb-12" />
      </div>
    </section>
  );
};

export default Features;
