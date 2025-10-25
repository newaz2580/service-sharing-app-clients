import React from "react";
import { motion } from "framer-motion";
import { FaTools } from "react-icons/fa";
import { Link } from "react-router";

const Banner = () => {
  return (
    <section className="px-4 sm:px-6 md:px-10 lg:px-20 xl:px-32 bg-white dark:bg-gray-950 py-12">
      <div className="container mx-auto flex flex-col-reverse lg:flex-row items-center justify-between gap-10 lg:gap-16">
        
        {/* Text Content */}
        <div className="flex-1 text-center lg:text-left">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold leading-tight tracking-tight abril-font text-blue-500">
            Expert Home Repairs You Can Trust
          </h1>

          <motion.p
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1, transition: { duration: 1.5 } }}
            className="mt-4 sm:mt-6 text-base sm:text-lg md:text-xl text-gray-700 dark:text-gray-300 font-poppins"
          >
            Trusted by thousands of homeowners. Get expert help with plumbing,
            electrical, carpentry, and more — right when you need it.
          </motion.p>

          <div className="mt-6 sm:mt-8 flex flex-col sm:flex-row sm:justify-center lg:justify-start gap-3 sm:gap-4">
            <Link to="/allServices">
              <button className="bg-blue-600 px-6 sm:px-8 py-2 text-white rounded-xl hover:bg-blue-800 text-base sm:text-lg md:text-xl transition-colors duration-300">
                Feature
              </button>
            </Link>
            <Link to="/contact">
              <button className="px-4 sm:px-6 py-2 text-base sm:text-lg md:text-xl text-black font-semibold rounded-lg border-2 border-indigo-500 dark:text-white hover:bg-indigo-600 hover:text-white transition-colors duration-300">
                Contact Us
              </button>
            </Link>
          </div>
        </div>

        {/* Image / Icon */}
        <div className="flex-1 flex justify-center items-center relative">
          <motion.div
            animate={{ y: [0, -15, 0] }}
            transition={{ duration: 3, repeat: Infinity }}
            className="absolute top-0 right-8 sm:right-10 text-indigo-500 text-3xl sm:text-4xl opacity-20"
          >
            <FaTools />
          </motion.div>

          <motion.img
            animate={{ y: [0, 15, 0] }}
            transition={{ duration: 4, repeat: Infinity }}
            src="https://i.ibb.co/bRvPCq5K/house.jpg"
            alt="Home Repair"
            className="rounded-full object-cover w-56 h-56 sm:w-64 sm:h-64 md:w-80 md:h-80 lg:w-96 lg:h-96 shadow-lg ring-4 ring-indigo-300 dark:ring-indigo-700"
          />
        </div>
      </div>
    </section>
  );
};

export default Banner;
