import React from "react";
import { motion } from "framer-motion";
import { FaGift, FaBolt } from "react-icons/fa";
import { Link } from "react-router";

const Promotional = () => {
  return (
    <section
      className="relative bg-cover bg-center bg-no-repeat py-20 px-6"
      style={{
        backgroundImage:
          "url('https://images.unsplash.com/photo-1581093458791-4b5c3a003a2f?auto=format&fit=crop&w=1600&q=80')",
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0   dark:bg-opacity-60"></div>

      {/* Content */}
      <div className="relative max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="bg-gray-100 dark:bg-green-950/80 backdrop-blur-md p-10 rounded-2xl shadow-lg text-center text-gray-900 dark:text-white"
        >
          <h1 className="text-4xl font-bold mb-2 tracking-tight">
            🎉 Promotional Offer
          </h1>
          <p className="text-lg text-gray-700 dark:text-gray-200 mb-6">
            Special discounts and deals just for you!
          </p>

          <div className="flex flex-col md:flex-row items-center justify-between gap-8">
            {/* Text Side */}
            <motion.div
              initial={{ x: -30, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ duration: 1 }}
              className="flex-1 text-center md:text-left"
            >
              <h2 className="text-3xl md:text-4xl font-bold text-blue-700 dark:text-white mb-4">
                🔧 Big Summer Sale – Up to 30% OFF!
              </h2>
              <p className="text-lg text-gray-700 dark:text-gray-300 mb-6">
                Book any home repair service this month and get up to 30%
                discount! Don’t miss this limited-time offer. Expert service at
                affordable prices, guaranteed.
              </p>
              <Link to="/allServices">
                <button className="inline-flex items-center gap-2 bg-blue-700 hover:bg-blue-900 text-white font-semibold py-3 px-6 rounded-full shadow-md transition duration-300">
                  Grab the Offer <FaBolt />
                </button>
              </Link>
            </motion.div>

            {/* Icon Side */}
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              transition={{ duration: 1 }}
              className="flex-1 flex justify-center"
            >
              <img src="https://i.ibb.co/VcbL4nKP/unnamed.jpg" alt="" />
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Promotional;
