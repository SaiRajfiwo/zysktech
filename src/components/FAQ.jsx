import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(0); // First question expanded by default

  const faqs = [
    {
      question: "Is there a free trial available?",
      answer:
        "Yes, you can try us for free for 30 days. If you want, we'll provide you with a free, personalized 30-minute onboarding call to get you up and running as soon as possible.",
    },
    {
      question: "Can I change my plan later?",
      answer:
        "Yes, you can upgrade, downgrade, or switch your plan at any time. Just visit your account settings or contact our support team for assistance.",
    },
    {
      question: "What is your cancellation policy?",
      answer:
        "Yes, you can cancel anytime without any fees. Your plan will remain active until the end of the billing cycle.",
    },
    {
      question: "Can other info be added to invoice?",
      answer:
        "Yes, you can customize your invoice by adding extra details like company name, tax ID, or notes. Check your account settings or contact support for help.",
    },
    {
      question: "How does billing work?",
      answer:
        "Billing is done on a [monthly/annual] basis, and payments are processed automatically. You can manage your billing details anytime from your account settings.",
    },
    {
      question: "How do I change my account email?",
      answer:
        "You can change your account email in your account settings under Profile or Account Details. If you need help, contact our support team.",
    },
  ];

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index); // Toggle visibility
  };

  return (
    <div className="max-w-3xl mx-auto p-6 mt-0 bg-white ">
      <h2 className="text-4xl font-semibold text-center mb-6 text-gray-900">
        Frequently asked questions
      </h2>
      <p className="text-gray-500 text-center text-xl">
        Everything you need to know about the product and billing.
      </p>
      <br />
      <div className="divide-y divide-gray-300">
        {faqs.map((faq, index) => (
          <div key={index} className="py-6">
            <button
              className="w-full flex justify-between items-center text-lg font-semibold text-gray-900 focus:outline-none transition-all duration-300"
              onClick={() => toggleFAQ(index)}
            >
              {faq.question}
              <img
                src={
                  openIndex === index
                    ? "/minus.png"
                    : "/plus.png"
                }
                alt={openIndex === index ? "Collapse" : "Expand"}
                className="w-6 h-6 transition-transform duration-200 hover:scale-110"
                style={{ transform: openIndex === index ? "rotate(180deg)" : "rotate(0deg)" }}
              />
            </button>

            {/* Expand/Collapse Answer with Animation */}
            <AnimatePresence>
              {openIndex === index && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: "auto" }}
                  exit={{ opacity: 0, height: 0 }}
                  transition={{ duration: 0.3, ease: "easeInOut" }}
                  className="overflow-hidden"
                >
                  <p className="text-gray-500 mt-2">{faq.answer}</p>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        ))}
        <div className="flex justify-center items-center bg-gray-50">
        <div className="flex flex-col justify-center items-center bg-gray-50 p-6 "> 
          <br/><br/> 
          <img 
            src="/pfp3.png" 
            alt="profile3" 
            className="h-14 transition-transform duration-300 ease-in-out hover:scale-110 hover:shadow-lg rounded-full"
          />

          <br/>
          <h1 className="text-2xl font-bold text-gray-900">Still have questions?</h1>
          <p className="text-gray-600 text-center mt-2">
            Can't find the answer your are looking for? Please chat to our friendly team.
          </p><br/>
          <button className="mt-4 bg-red-500 transition-transform duration-200 hover:scale-109 text-white px-6 py-2 rounded-lg text-lg font-medium hover:bg-red-700">
            Get in Touch
          </button>
          </div>
          </div>
      </div>
      <br/><br/>
      {/* Dividing line */}
      <hr className="border-t-2 border-gray-200 mx-16 mb-12" />

    </div>
  );
};

export default FAQ;
