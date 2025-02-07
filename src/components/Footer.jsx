import React from "react";

const Footer = () => {
  const footerData = {
    Product: ["Overview", "Features", "Solutions", "Tutorials", "Pricing", "Releases"],
    Company: ["About us", "Careers", "Press", "News", "Media kit", "Contact"],
    Resources: ["Blog", "Newsletter", "Events", "Help Center", "Tutorials", "Support"],
    "Use Cases": ["Startups", "Enterprise", "Government", "SaaS centre", "Marketplaces", "Ecommerce"],
    Social: ["Twitter", "LinkedIn", "Facebook", "GitHub", "AngleList", "Dribbble"],
    Legal: ["Terms", "Privacy", "Cookies", "Licenses", "Settings", "Contact"],
  };

  return (
    <footer className="bg-white text-gray-600 py-12">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
        {Object.entries(footerData).map(([title, links]) => (
          <div key={title}>
            <h3 className="text-gray-950 font-semibold mb-4">{title}</h3>
            <ul className="space-y-2">
              {links.map((link, index) => (
                <li key={index} className="hover:text-rose-700 transition-transform duration-200 hover:scale-104 cursor-pointer flex items-center">
                  {link}
                  {title === "Product" && link === "Solutions" && (
                    <img src="/src/assets/new.png" alt="icon" className="ml-2 mt-1 w-8 h-4" />
                  )}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      {/* Copyright and Logo Section (Responsive) */}
        <div className="border-t border-gray-200 mt-16 py-2 px-6 flex flex-col sm:flex-row items-center justify-between text-center sm:text-left">
          <img src="/zysk.png" alt="Zysk Logo" className="w-20 sm:w-24 sm:ml-20 mb-2 sm:mb-0" />
          <p className="text-gray-400 text-sm sm:text-m sm:mr-24">
            © 2077 zysktechnologies. All rights reserved.
          </p>
        </div>

    </footer>
  );
};

export default Footer;