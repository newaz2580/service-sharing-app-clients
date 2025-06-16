import React from "react";
import { motion } from "framer-motion"; 
import { FaTools } from "react-icons/fa";

const Hero = () => {
  return (
    <section className="bg-gradient-to-br from-blue-100 via-purple-100 to-pink-100 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 py-16">
      <div className="container h-[580px] mx-auto px-4 flex flex-col-reverse lg:flex-row items-center justify-between gap-12">
        

        <div className="flex-1 text-center lg:text-left">
          <motion.h1
            animate={{
              color: ["#f42918", "#1284f6", "#17f10d"],
              transition: { duration: 4, repeat: Infinity },
            }}
            className="text-4xl md:text-6xl font-extrabold leading-tight tracking-tight"
          >
            Home <span className="bg-gradient-to-r from-purple-500 to-pink-500 bg-clip-text text-transparent">Repair</span> Service
          </motion.h1>

          <motion.p
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1, transition: { duration: 2 } }}
            className="mt-6 text-xl md:text-2xl text-gray-700 dark:text-gray-300"
          >
            Let the experts handle your household problems with ease and care.
          </motion.p>

          <div className="mt-8 flex flex-col sm:flex-row sm:justify-center lg:justify-start gap-4">
            <a
              href="#"
              className="px-8 py-3 text-lg font-semibold rounded-lg bg-gradient-to-r from-blue-500 to-indigo-500 text-white shadow-md hover:scale-105 transition-transform duration-300"
            >
              Explore Features
            </a>
            <a
              href="#"
              className="px-8 py-3 text-lg font-semibold rounded-lg border-2 border-indigo-500 text-indigo-500 hover:bg-indigo-100 transition-colors duration-300"
            >
              Contact Us
            </a>
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

export default Hero;
