import React from "react";
import { motion } from "framer-motion";
import { FaGift, FaBolt } from "react-icons/fa";
import { Link } from "react-router";

const Promotional = () => {
  return (
    <section className="bg-white dark:bg-gray-900 dark:text-white py-8 px-6">
      <div className="max-w-7xl mx-auto text-center mb-10">
        <h1 className="text-4xl font-bold tracking-tight">
          🎉 Promotional Offer
        </h1>
        <p className="text-lg mt-2 text-gray-800 dark:text-gray-200">
          Special discounts and deals just for you!
        </p>
      </div>

      <div className="max-w-7xl mx-auto bg-green-100  p-10 rounded-xl dark:bg-green-950 flex flex-col md:flex-row items-center justify-between gap-10">
       
        <motion.div
          initial={{ x: -40, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 1 }}
          className="flex-1 text-center md:text-left"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-blue-700 dark:text-white mb-4">
            🔧 Big Summer Sale – Up to 30% OFF!
          </h2>
          <p className="text-lg text-gray-700 dark:text-gray-200 mb-6">
            Book any home repair service this month and get up to 30% discount!
            Don’t miss this limited-time offer. Expert service at affordable
            prices, guaranteed.
          </p>
          <Link to='/allServices'>
          <button
            href="#"
            className="inline-block bg-blue-700 hover:bg-blue-900 text-white font-semibold py-3 px-6 rounded-lg transition"
          >
            Grab the Offer <FaBolt className="inline ml-2" />
          </button>
          </Link>
        </motion.div>

       
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          transition={{ duration: 1 }}
          className="flex-1 flex justify-center"
        >
          <FaGift className="text-blue-700 dark:text-white  text-[120px]" />
        </motion.div>
      </div>
    </section>
  );
};

export default Promotional;
