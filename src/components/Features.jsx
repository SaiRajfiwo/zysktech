import React from 'react';

const Features = () => {
  return (
    <section className="bg-white py-20 mt-0">
      <div className="container mx-auto text-center">
         {/* Dividing line */}
         <hr className="border-t-2 border-gray-200 mx-8 mb-12" />

        <h2 className="text-xl font-bold text-rose-600 mb-6">Features</h2>
        <h1 className="text-3xl font-bold text-gray-900">Analytics that feels like it's from the future</h1>
        <br/>
        <p className="text-lg text-gray-500 mb-12">
        Powerful, self-serve product and growth analytics to help you convert, engage,<br/>
        and retain more users. Trusted by over 4,000 startups.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Feature 1 */}
          <div className="bg-white p-6 rounded-lg flex flex-col shadow-lg items-center transition-transform duration-200 hover:scale-102 hover:shadow-xl">
            <div className="text-4xl text-rose-600 mb-4">
            <img src="/icon1.png" alt="icon1" /> {/* Image icon */}
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-4">Share team inboxes</h3>
            <p className="text-gray-600">Weather you have a team of 2 or 200, our shared team inboxes keep everyone on the same page and in the loop.</p>
          </div>

          {/* Feature 2 */}
          <div className="bg-white p-6 rounded-lg flex flex-col shadow-lg items-center transition-transform duration-200 hover:scale-102 hover:shadow-xl">
            <div className="text-4xl text-rose-600 mb-4">
            <img src="/icon2.png" alt="icon2" /> {/* Image icon */}
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-4">Deliver instant answers</h3>
            <p className="text-gray-600">An all-in-one customer service platform that helps you balance everything your customers need to be happy.</p>
          </div>

          {/* Feature 3 */}
          <div className="bg-white p-6 rounded-lg flex flex-col shadow-lg items-center transition-transform duration-200 hover:scale-102 hover:shadow-xl">
            <div className="text-4xl text-rose-600 mb-4">
            <img src="/icon3.png" alt="icon3" /> {/* Image icon */}
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-4">Manage your team with reports</h3>
            <p className="text-gray-600">Measure what matters with Untitled's easy-to-use reports. You can filter, export, and drilldown on the data in a couple clicks.</p>
          </div>
          

          {/* Feature 4 */}
          <div className="bg-white p-6 rounded-lg flex flex-col shadow-lg items-center transition-transform duration-200 hover:scale-102 hover:shadow-xl">
            <div className="text-4xl text-rose-600 mb-4">
            <img src="/icon4.png" alt="icon4" /> {/* Image icon */}
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-4">Connect with customers</h3>
            <p className="text-gray-600">Solve a problem or close a sale in real-time with chat. If no one is available, customers are seamlessly routed to email without confusion.</p>
          </div>

          {/* Feature 5 */}
          <div className="bg-white p-6 rounded-lg flex flex-col shadow-lg items-center transition-transform duration-200 hover:scale-102 hover:shadow-xl">
            <div className="text-4xl text-rose-600 mb-4">
            <img src="/icon5.png" alt="icon5" /> {/* Image icon */}
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-4">Connect the tools you already use</h3>
            <p className="text-gray-600">Explore 100+ integrations that make your day-to-day workflow more effecient and fimiliar. Plus, our extensive developer tools.</p>
          </div>

          {/* Feature 6 */}
          <div className="bg-white p-6 rounded-lg flex flex-col shadow-lg items-center transition-transform duration-200 hover:scale-102 hover:shadow-xl">
            <div className="text-4xl text-rose-600 mb-4">
            <img src="/icon6.png" alt="icon6" /> {/* Image icon */}
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-4">Our people make the difference</h3>
            <p className="text-gray-600">We're an extension of your customer service team, and all of our resources are free. Chat to our friendly team 24/7 when you need help.</p>
          </div>
        </div>
        <br/><br/>

        <div className="bg-gray-50 w-full py-10 flex justify-center px-4">
    <div className="p-6 flex flex-col items-center text-center ">
    {/* Logo */}
      <img 
        src="/logo7.png" 
        alt="Logo 7" 
        className="w-20 md:w-24 mb-4 transition-transform duration-300 ease-in-out hover:scale-110 hover:opacity-100"
      />

    
    {/* Quote Text */}
    <p className="text-black text-2xl md:text-4xl font-semibold leading-snug md:leading-normal mb-6">
      We've been using Untitled to kickstart every new project and can't imagine working without it.
    </p>

    {/* Profile Picture */}
    <img 
      src="/pfp2.png" 
      alt="profile2" 
      className="w-14 h-14 md:w-16 md:h-16 rounded-full mb-2 transition-transform duration-300 ease-in-out hover:scale-110 " 
    />


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
