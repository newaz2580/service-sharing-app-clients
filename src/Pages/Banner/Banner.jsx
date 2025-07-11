import React from "react";
import { motion } from "framer-motion";
import { FaTools } from "react-icons/fa";
import { Link } from "react-router";

const Banner = () => {
  return (
    <section className="px-5 lg:px-20 bg-gradient-to-br from-blue-100 via-purple-100 to-pink-100 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 py-16">
      <div className="container max-h-screen[60%] mt-40 md:mt-0 lg:mt-0 mx-auto px-4 flex flex-col-reverse lg:flex-row items-center justify-between gap-12">
        <div className="flex-1 text-center lg:text-left">
          <motion.h1
            animate={{
              color: ["#f42918", "#1284f6", "#17f10d"],
              transition: { duration: 4, repeat: Infinity },
            }}
            className="text-4xl md:text-6xl font-extrabold leading-tight tracking-tight"
          >
            Expert{" "}
            <span className="bg-gradient-to-r from-purple-500 to-pink-500 bg-clip-text text-transparent">
              Home Repairs
            </span>{" "}
            You Can Trust
          </motion.h1>

          <motion.p
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1, transition: { duration: 2 } }}
            className="mt-6 text-xl md:text-2xl text-gray-700 dark:text-gray-300"
          >
            Trusted by thousands of homeowners. Get expert help with plumbing,
            electrical, carpentry, and more — right when you need it.
          </motion.p>

          <div className="mt-8 flex flex-col sm:flex-row sm:justify-center lg:justify-start gap-4">
           <Link to='/allServices'>
            <button className="bg-blue-600 px-6 lg:px-8 py-2 text-white rounded-xl hover:bg-blue-950 text-xl">
            Feature
          </button>
           </Link>
           <Link to='/contact'>
            <button
              
              className="px-2 lg:px-5 py-2 text-xl text-black font-semibold rounded-lg border-2 border-indigo-500 dark:text-white transition-colors duration-300"
            >
              Contact Us
            </button>
           </Link>
          </div>
        </div>

        <div className="flex-1 flex justify-center items-center relative">
          <motion.div
            animate={{ y: [0, -20, 0] }}
            transition={{ duration: 3, repeat: Infinity }}
            className="absolute top-0 right-10 text-indigo-500 text-4xl opacity-20"
          >
            <FaTools />
          </motion.div>

          <motion.img
            animate={{ y: [0, 20, 0] }}
            transition={{ duration: 4, repeat: Infinity }}
            src="https://i.ibb.co/bRvPCq5K/house.jpg"
            alt="Home Repair"
            className="rounded-full object-cover w-72 h-72 sm:w-80 sm:h-80 lg:w-96 lg:h-96 shadow-lg ring-4 ring-indigo-300 dark:ring-indigo-700"
          />
        </div>
      </div>
    </section>
  );
};

export default Banner;
